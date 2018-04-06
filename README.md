# ansible-graylog
Ansible playbooks to provision a graylog server

## Production
### Changing the remote host
Go to inventory list and change the `example.com` to your Fully qualified domain name (FQDN) domain name. If you want to deploy to an ip address you should disable certbot role because let's encrypt can only be used for domain names.

### Provision the server
Run the following command in the root directory of the projcet.
```bash
ansible-playbook -i inventory_list production.yml
```


