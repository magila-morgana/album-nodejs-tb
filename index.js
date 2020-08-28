// Importação das dependências
const express = require('express')
const path = require('path')

// Inicializar o express
const app = express()

// View engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'app', 'views'))

// Pasta estática
app.use(express.static(path.join(__dirname, 'src', 'public')))

// Rotas
app.get("/", (req, res) => {
  res.render('formulario_imagem')
})

// Ouvindo a rota
app.listen(3000)
