# This site uses systemd services for security isolation
#
# To deploy this site with full isolation:
# 1. Run: /root/webalive/claude-bridge/scripts/deploy-site-systemd.sh components.alive.best
# 2. The systemd service will be created automatically
# 3. Service name: site@components-alive-best.service
#
# Manual systemd commands:
# - Start: systemctl start site@components-alive-best.service
# - Status: systemctl status site@components-alive-best.service
# - Logs: journalctl -u site@components-alive-best.service -f
#
# Security features:
# - Runs as user: site-components-alive-best
# - Isolated file access
# - Resource limits enforced
# - systemd security hardening active
