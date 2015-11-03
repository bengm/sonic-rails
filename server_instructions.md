# Setting up a Mac as a Server

1) Create network: go to wireless menu in top bar, select *Create Network*
2) Find IP: in terminal, type `ifconfig | grep inet` - you should see a line like: `inet 169.254.144.111 netmask 0xffff0000 broadcast 169.254.255.255`. Copy the first IP.
3) Start rails server specifying IP and port `rails server -b 169.254.144.111 -p 3000`
4) App should be accessible on other connected machines (http://169.254.144.111:3000)
