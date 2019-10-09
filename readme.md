# FBKAL

a site for the fantasy basketball keepers auction league. specifically the one i'm a part of, which we call FBKAL

## update log

- airtable data updated: monday 2019.10.7 9:33am MT

## todo

- Gatsby uses moment.js which allows graphql queries of dates to be formatted. so change the "updated" component on keepers and individual keeper pages to show a nice, formatted date
- IMPROVE BREADCRUMB HEADER i've made a dynamic header of breadcrumbs and i like it, but i don't think it's quite as automatic or useful as i'd like it to be
- separate each keeper page into a keepers component and build keepers and individual team-keepers pages from that keepers component
- on keepers page: useful league statistics like average keeper salary, average full years on team, total trades
- on each keeper team section: useful averages like average salary, average full years on team
- figure out a way to show other useful information like more precisely where players came from (draft picks, trades, etc...), amount of trades a team has made, team overall statistics or totals or both, etc...
- allow sorting and sort by CTK by default both keepers and each team's individual keeper page
- links to each team's individual keepers page on the keepers page
- style table to match steph's design
- make header navigation function like:
  1. FBKAL (homepage)
  2. FBKAL / Keepers (keepers page)
  3. FBKAL / Keepers / Bird Rights (bird-rights keepers page)
the header becomes a dynamic path. i just like the idea so much
- figure out what to do with the homepage. maybe it should just be the keepers page. maybe it should be a blog roll of the stuff that's currently in the announcements channel in the fbkal slack
  - setup the homepage as a feed of announcements (html versions of alan's docs (with links to download the associated file), trade announcements, etc...)