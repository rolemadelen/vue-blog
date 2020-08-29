## Install and setup MongoDB on Arch Linux

I grabbed a large covid json file to add covid stats to each country for [this](https://github.com/jioneeu/countries-directory) side project I'm working on.

Thing is this json file is too large that I cannot (and shouldn't) commit to GitHub. So I decided to use MongoDB to save this JSON file.

## MongoDB Installation

1. Visit [here](https://aur.archlinux.org/packages/mongodb-bin/) and clone the git repo.
2. Clone the repo and `cd` into the directory: `$ cd mongodb-bin/`
3. Run `makepkg -si`
  + `-s` flag handles the dependency
  + `-i` flag installs the package
4. Start the mongodb service by running `systemctl start mongodb`
  + If prompt, enter the root password.
5. If needed, enable it with `systemctl enable mongodb`
  + If prompt, enter the root password.
6. Type `mongo` in the terminal and you're ready to go.

## Reference
- https://stackoverflow.com/questions/59455725/install-mongodb-on-manjaro
