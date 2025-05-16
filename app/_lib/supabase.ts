// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hyzwngffxbnvsnxfdymn.supabase.co"; // 替换为你的 Supabase 项目 URL
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5enduZ2ZmeGJudnNueGZkeW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MDM0NDMsImV4cCI6MjA1ODM3OTQ0M30.4RDdtKSSACxvkNKNbwYr8TWE6OZvAgUi7ZEGZsr2aSE"; // 替换为你的 Supabase 服务角色密钥

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;


