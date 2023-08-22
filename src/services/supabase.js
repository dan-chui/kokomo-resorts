import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bqdbwkbvuswcmeuiqkmf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZGJ3a2J2dXN3Y21ldWlxa21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NTg4MTYsImV4cCI6MjAwODIzNDgxNn0.w6LDU4AJnFvwoO6BRQQJ8iFIPXTDN1LlCv_7WnFgaC8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
