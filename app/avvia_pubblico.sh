#!/bin/bash

# Ottieni la password per il tunnel
echo "Ottengo la password per il tunnel..."
curl https://loca.lt/mytunnelpassword
echo ""
echo "Copiale la password qui sopra per accedere al sito."
echo ""

# Avvia il server di preview in background
echo "Avvio il server..."
npm run preview &
PREVIEW_PID=$!

# Attendi che il server sia pronto
sleep 5

# Avvia il tunnel
echo "Avvio il tunnel pubblico..."
npx localtunnel --port 4173

# Uccidi il server quando il tunnel viene chiuso
kill $PREVIEW_PID
