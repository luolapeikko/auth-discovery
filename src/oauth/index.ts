import {z} from 'zod';

const oauthGrantTypes = ['code', 'implicit', 'authorization_code'] as const;

const oAuthBaseConfigSchema = z.object({
	pkce: z.boolean().optional(),
	client_id: z.string(),
	scope: z.string().optional(),
});

export const oAuthSpaManualConfigSchema = oAuthBaseConfigSchema.extend({
	type: z.literal('oauth_spa'),
	session: z.enum(['bearer']).optional(),
	grant_type: z.enum(oauthGrantTypes),
	authorization_endpoint: z.url(),
	token_endpoint: z.url(),
	redirect_uri: z.url().optional(),
});

export type OAuthSpaManualConfig = z.infer<typeof oAuthSpaManualConfigSchema>;

export const oAuthSpaAutoDiscovery = oAuthBaseConfigSchema.extend({
	type: z.literal('oauth_spa_auto'),
	session: z.enum(['bearer']).optional(),
	grant_type: z.enum(oauthGrantTypes).optional(),
	issuer: z.url(),
});

export type OAuthSpaAutoDiscoveryConfig = z.infer<typeof oAuthSpaAutoDiscovery>;
