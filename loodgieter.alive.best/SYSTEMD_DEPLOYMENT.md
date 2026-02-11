# This site uses systemd services for security isolation
#
# To deploy this site with full isolation:
# 1. Run: /root/webalive/claude-bridge/scripts/deploy-site-systemd.sh loodgieter.alive.best
# 2. The systemd service will be created automatically
# 3. Service name: site@loodgieter-alive-best.service
#
# Manual systemd commands:
# - Start: systemctl start site@loodgieter-alive-best.service
# - Status: systemctl status site@loodgieter-alive-best.service
# - Logs: journalctl -u site@loodgieter-alive-best.service -f
#
# Security features:
# - Runs as user: site-loodgieter-alive-best
# - Isolated file access
# - Resource limits enforced
# - systemd security hardening active
