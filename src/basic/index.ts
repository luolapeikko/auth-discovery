import {z} from 'zod';

const basicAuthConfigSchema = z.object({
	type: z.literal('http_basic'),
	session: z.enum(['header', 'cookie']),
	session_key: z.string().optional(),
	prefix: z.string().optional(),
	login_url: z.string().url(),
	logout_url: z.string().url().optional(),
});

export type HttpBasicAuthConfig = z.infer<typeof basicAuthConfigSchema>;
