# This site uses systemd services for security isolation
#
# To deploy this site with full isolation:
# 1. Run: /root/webalive/claude-bridge/scripts/sites/deploy-site-systemd.sh blank.alive.best
# 2. The systemd service will be created automatically
# 3. Service name: site@blank-alive-best.service
#
# Manual systemd commands:
# - Start: systemctl start site@blank-alive-best.service
# - Status: systemctl status site@blank-alive-best.service
# - Logs: journalctl -u site@blank-alive-best.service -f
#
# Security features:
# - Runs as user: site-blank-alive-best
# - Isolated file access
# - Resource limits enforced
# - systemd security hardening active
