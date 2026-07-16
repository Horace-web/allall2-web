// ALL ALL 2 — Connexion Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://wmobvjetjbblyzrtldid.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtb2J2amV0amJibHl6cnRsZGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNTA3MTksImV4cCI6MjA5OTcyNjcxOX0.u7HqN-aSPOaRd2Nx00G8au8S6dyQcJe1BYV9QFqcVF0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
