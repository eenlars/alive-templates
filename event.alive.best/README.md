# barendbootsma.com

This site was created from the webalive template.

## Quick Deploy

To deploy this site with secure systemd isolation:

```bash
/root/webalive/claude-bridge/scripts/deploy-site-systemd.sh barendbootsma.com
```

This provides:
- ✅ Process isolation (dedicated user, not root)
- ✅ File system restrictions
- ✅ Resource limits and security hardening
- ✅ systemd sandboxing

## Development

```bash
cd /root/webalive/sites/barendbootsma.com/user
bun install
bun run dev
```

## Manual Deployment Steps

See `/root/webalive/sites/template/DEPLOYMENT.md` for detailed manual deployment instructions.

## Site Info

- Domain: barendbootsma.com
- Created: Sun Oct 26 16:16:34 CET 2025
- Template Version: 2025.10.26
