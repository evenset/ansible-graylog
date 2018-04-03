# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/xenial64"
  config.ssh.forward_agent = true

  config.vm.network "private_network", ip: "192.168.20.20"


  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--name", "Graylog-server", "--memory", "2048"]
  end

  # Ansible provisioner
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "vagrant.yml"
    ansible.host_key_checking = false
    ansible.extra_vars = { ansible_ssh_user: 'vagrant' }
    ansible.verbose = "vv"
  end
end
