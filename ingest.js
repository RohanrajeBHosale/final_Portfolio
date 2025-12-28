const { createClient } = require('@supabase/supabase-js');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// 1. FILL THESE IN from your new Supabase project settings
const SUPABASE_URL = 'YOUR_NEW_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_NEW_SERVICE_ROLE_KEY';
const GEMINI_KEY = 'YOUR_GEMINI_API_KEY';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

async function ingest() {
    const knowledgeDir = './knowledge'; // Path to your .md files
    const files = fs.readdirSync(knowledgeDir);

    for (const file of files) {
        if (!file.endsWith('.md')) continue;

        console.log(`Processing ${file}...`);
        const content = fs.readFileSync(path.join(knowledgeDir, file), 'utf8');

        // Generate Embedding
        const result = await model.embedContent(content);
        const embedding = result.embedding.values;

        // Insert into Supabase
        const { error } = await supabase.from('documents').insert({
            content: content,
            metadata: { source: file },
            embedding: embedding
        });

        if (error) console.error(`Error inserting ${file}:`, error);
        else console.log(`Successfully ingested ${file}`);
    }
}

ingest();