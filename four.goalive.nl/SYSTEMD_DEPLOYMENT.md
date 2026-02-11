# This site uses systemd services for security isolation
#
# To deploy this site with full isolation:
# 1. Run: /root/webalive/claude-bridge/scripts/deploy-site.sh barendbootsma.com
# 2. The systemd service will be created automatically
# 3. Service name: site@barendbootsma-com.service
#
# Manual systemd commands:
# - Start: systemctl start site@barendbootsma-com.service
# - Status: systemctl status site@barendbootsma-com.service
# - Logs: journalctl -u site@barendbootsma-com.service -f
#
# Security features:
# - Runs as user: site-barendbootsma-com
# - Isolated file access
# - Resource limits enforced
# - systemd security hardening active
