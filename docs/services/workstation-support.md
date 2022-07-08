---
sidebar_position: 2
---

# IT Assets Support & Management

If your goal is to show up as a first result on Google, and you are fine with having `Ad` next to your listing, then, what you need is not SEO. You may contact [Promotion Efficiency](https://www.promoe.com.sa) and they will be happy to serve that 

## Numbering

We follow a structure for numbering assets and certain rules, the tag should be 6 numbers prefixed with 2 characters representing asset type, if number is less then 4 digits, prefix with `0`s, below are details:

- PC, Laptop, Tablet `BC9999`
- Monitors and screens `BM1111`
- Printers `BP7777`
- Mobiles and Telephone headsets `BT0000`
- Cameras, no rule yet
- keyboards and mouses, due to low value, no need to tag.

## Join Domain

On elevated shell, perform the below to rename the PC as per the tag number and then join domain

```powershell
# set computer name and group
$ SET /P compname=[promptString]
$ SET /P org=[promptString]

# join domain
$ NETDOM JOIN %compname% /Domain:promoe.local /OU:"Promo/Headquarter/Computers",DC=promoe,DC=local /UserD:DOMAIN\user /PasswordD:password /Reboot:15 /verbose
```

## Initial Settings

- show all desktop icons
- disable sleep and hibernate
- set taskbar icon size to small
- set tray icons to always show
- set task bar items grouping to `when full`
- enable show file extensions
- create a shortcut to the shared folder on user desktop
- disable cortana and remove search bar from task bar

## Setup remote desktop

Using company email, setup chrome remote desktop


## Respect Others Rights

- No cracks
- No stolen serial numbers

If you want it, either use a free alternative, or pay the appropriate fee.
This does not only shows profissionalism, but protects against hidden malware and virus attacks.


## Standard Applications

As we are invested in knowledge sharing and open-source, a set of open-source applications are installed on our base images, along with necessary proprietary applications, below is the list:

- Winget `telegram, whatsapp, adobe acrobat, 7-zip, google-chrome, brave, fdm, node, composer, python, docker`
- **Developers Only** Winget `vscode, github-desktop, termius, `
- Microsoft office
  Get license from IT based on HR directions
