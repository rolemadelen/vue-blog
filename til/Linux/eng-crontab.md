
# Scheduling Cron Jobs with Crontab

**Crontab** (Cron Table) is a text file that specifies the schedule of **cron jobs**.

## Basic Commands
- `crontab -e`: Edit user's crontab
- `crontab -l`: Print user's crontab
- `crontab -r`: Reset user's crontab

## How it works

```
*  *  *  *  *
│  │  │  │  └── day   (week; 0-7)
│  │  │  └───── month (1-12)
│  │  └──────── day   (month; 1-31)
│  └─────────── hour  (0-23)
└────────────── min   (0-59)
```

For the `day (week; 0-7)`, both `0` and `7` are Sunday but `7` is not a standard that might not work in other environment.

- `*`: any value
- `,`: value list separator
- `-`: range of values
- `/`: step values

## Example
```bash
# At every minute, save the result of `ls -al /home` to `cron-log.txt`
* * * * * ls -al /home >> ~/Documents/cron-log.txt
```

```bash
# At 23:50, run `backup.sh` script
50 23 * * * ~/script/backup.sh
```

## Reference
- https://crontab.guru
