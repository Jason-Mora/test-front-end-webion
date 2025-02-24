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
### Gestione delle API
Le api vengono gestite dalla libreria userService.ts che contiene un insieme di funzioni che interagiscono con le api per effettuare la varie operazioni sugli user (retrieve, modifica ed eliminazione).
Ogni funzione utilizza i metodi della libreria networkUtils.ts per effettuare le chimate get, put e delete con la libreria axios.
### Applicativo
Per quanto riguarda l'implementazione della pagina richiesta le scelte degne di attenzione riguardano i seguenti punti:
- scelta tabella -> La tipologia di tabella scelta è stata quella formata dai componenti TableContainer, Table, TableHade, TableBody, TableRow e TableCell della libreria MUI in quanto ritenuta più adatta all'implementazione della schermata vista la semplicità della stessa e la necessita di avere una versione differente delle righe nella vista mobile.
- brekpoint monbile -> il breakpoint mobile è stato fissato per una larghezza dello schermo di 768px
- visualizzazione errori/operazioni concluse -> le informazioni da fornire all'utente, che siano errori o stati di operazioni, vengono date tramite l'uso di Alert a scomparsa.
- caricamento -> lo stato di caricamento è implementato tramite una variabile di stato. Se questa ha coma valore true viene visualizzata un anteprima di caricamento della tabella tramite dei componenti Skeleton, altimenti la schermata come prevista
