import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

const connectionString = process.env.DATABASE_URL || "postgresql://dummy:dummy@ep-dummy.us-east-1.aws.neon.tech/neondb?sslmode=require"
const sql = neon(connectionString)
const db = drizzle(sql)

export default db;