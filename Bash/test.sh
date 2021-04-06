#!/bin/bash
#
# This is a mega simple script to read a list of servers from list.txt
# and perform basic checks on the servers to assist in determining
# potential issues that could hinder remediation.
# 

main() {
    date
    #echo Output Target: results.txt
    echo Before proceeding, please ensure sshpass is installed on the local host so that the script can successfully check for AD creds of a server.
    echo Reading servers from list.txt...

    #Check if results.txt already exists, if so, rename file with timestamp and create new results.txt

    load_key

    PS3='Please enter your choice:'
    options=("Scan List of Servers" "Install DG" "Install Lynis" "Quit")
    select opt in "${options[@]}"
    do
        case $opt in
            "Scan List of Servers")
                echo "Scanning..."
                
}
