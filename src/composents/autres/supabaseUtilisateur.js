import { createClient } from "@supabase/supabase-js";

// Configuration Supabase
const supabaseUrl = "https://imtcirtjnjnyofrdmbdx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltdGNpcnRqbmpueW9mcmRtYmR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MzkxNDIsImV4cCI6MjA0NDUxNTE0Mn0.11uWQr14xSXBvV9lH5cgEmBLQBL6k6ETnSisdVL4Tkk";
export const supabase = createClient(supabaseUrl, supabaseKey);

