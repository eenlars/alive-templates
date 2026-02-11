# This site uses systemd services for security isolation
#
# To deploy this site with full isolation:
# 1. Run: /root/webalive/claude-bridge/scripts/deploy-site-systemd.sh one.goalive.nl
# 2. The systemd service will be created automatically
# 3. Service name: site@one-goalive-nl.service
#
# Manual systemd commands:
# - Start: systemctl start site@one-goalive-nl.service
# - Status: systemctl status site@one-goalive-nl.service
# - Logs: journalctl -u site@one-goalive-nl.service -f
#
# Security features:
# - Runs as user: site-one-goalive-nl
# - Isolated file access
# - Resource limits enforced
# - systemd security hardening active
