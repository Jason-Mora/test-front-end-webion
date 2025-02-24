## Installazione
Eseguire il comando di installazione delle dipendenze nella cartella principale del progetto:
```bash
npm install
```

## Esecuzione
Eseguire il comando per il deploy del server nella cartella principale del progetto:
```bash
npm run start
```
Aprire [http://localhost:3000](http://localhost:3000) con il browser per utilizzare l'applicativo.

## Librerie utilizzate
- MUI
- axios
- dayjs
- moment

## Scelte implementative
###Gestione delle API
Le api vengono gestite dalla libreria userService.ts che contiene un insieme di funzioni che interagiscono con le api per effettuare la varie operazioni sugli user (retrieve, modifica ed eliminazione).
Ogni funzione utilizza i metodi della libreria networkUtils.ts per effettuare le chimate get, put e delete con la libreria axios.
