const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const views = require('koa-views')
const path = require('path')
const serve = require('koa-static')

app.use(logger())
app.use(serve(__dirname + '/dist'))
app.use(views(path.join(__dirname, 'dist'), { ext: 'html', cache: true }))
app.use(async (ctx) => await ctx.render('index.html'))

app.listen(8080, () => console.log('listening 8080'))
