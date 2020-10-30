# Dear Diary Server

### Backend Code for Dear Diary

<h4><b>Description:</b></h4>
<p>A GraphQL Api that handles the auth and DB Interface with Postgres and handles Queries for Auth and Entries also uses a Redis-based session system</p>
<h4>Tech Stack</h4>
<p>The following Tech stack used for this project</p>
<table>
<tr>
<td  align="center"><a  href="https://nodejs.org/en/"><img  src="https://miro.medium.com/max/2560/1*MuVcoMPyJcq8G4qf5s3HGQ.png"  width="280px"  /></a></td>
<td  align="center"><a  href="https://www.typescriptlang.org/"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"  width="280px"  /></a></td>
<td  align="center">
<a  href="https://expressjs.com/"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQczIIX-9smYWVgRQ-kodnhpTgbsv5kmvxadg&usqp=CAU"  /></a>
</td>
</tr>
<tr><td  align="center">NodeJs</td>
<td  align="center">TypeScript</td>
<td  align="center">Express</td>
</tr>
<tr>
<td  align="center"><a  href="https://graphql.org/"><img  src="https://graphql.org/img/logo.svg "  width="280px"  /></a></td>
<td  align="center"><a  href="https://www.postgresql.org/"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png "  width="280px"  /></a></td>
<td  align="center">
<a  href="https://redis.io/"><img  src="https://cdn.auth0.com/blog/logos/redis-icon-logo.png"/></a>
</td>
</tr>
<tr><td  align="center">GraphQL</td>
<td  align="center">PostgresSQL</td>
<td  align="center">Redis</td>
</tr>
<tr>
<td  align="center"><a  href="https://www.apollographql.com/"><img  src="https://miro.medium.com/max/3392/1*BIR94Q8MDPonvvFtsnUYLg.png"  width="280px"  /></a></td>
<td  align="center"><a  href="https://typeorm.io/"><img  src="https://avatars2.githubusercontent.com/u/20165699?s=400&v=4"  width="280px"  /></a></td>
</tr>
<tr><td  align="center">Apollo</td>
<td  align="center">TypeORM</td>

</tr>
</table>

<b>Getting Started</b>

<p>Make sure you have the following installed in your system:</p>
<p> <b>-</b> Node 12+ </p>
<p> <b>-</b> Yarn 1.2+ </p>
<p> <b>-</b> Postgres 13 </p>
<p> <b>-</b> Redis 6+</p>

<p>Once We have those we can get started by running</p>
<ul>
<li>
Install Dependencies
</li>
<code>yarn </code>
<li>
Run TypeScript Compiler to gererate the <i>dist</i> Folder</li>
<code>yarn watch</code>
<li>
Run the Server</li>
<code>yarn dev</code>
</ul>
You can then access the GraphQL playground at <code> localhost:4000/graphql</code>
<h1>Project is still WIP</h1>

[graphql]: https://graphql.org/img/logo.svg "GraphQL"
[typescript]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png "TypeScript"
[postgres]: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png "Postgres"
[redis]: https://cdn.auth0.com/blog/logos/redis-icon-logo.png"Redis"
