---
sidebar_position: 1
---

# Infrastructure

## Serverless Setup Maximization

Goal is to minimize servers utiliziation unless it is absoloutly necessary. This should reduce resources management over-head and cost.

### Service Providers

As of today, only two services are used:

- DNS management: Cloudflare
- Static Sites Hosting: Github

If absolutly necessary, below are the main setup steps and preferences for the servers choice.

## OS of choice

- Ubuntu (preferred)
- CentOs

## Servers

### Servers Service Providers

- Hetzner (preferred)
- Digital Ocean

### Servers Configuration Steps

- install nano `yum install nano`, symlinmk to `pico` if not done automatically `ln -sv /usr/bin/nano /usr/bin/pico`
- set SSH Keys
- disable root password SSH login
- change SSH port
- install docker
