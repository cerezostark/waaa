document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('song');
    const loader = document.querySelector('.loader');
    const lyrics = document.querySelectorAll('.lyric-line');
  
    // Array con los tiempos en segundos para cada línea de la letra
    const lyricTimes = [
9.1,	// “A veces hablamos hasta tan tarde”
14.1,	// “Que abro los ojos y el Sol ya sale”
17,	// “Me dan igual tus ojeras de mañana”
21.1,	// “Si podemos hablar”
23,	// “Si podemos ah-oh”
26,	// “Y cuando bailo sola en los bares”
29,	// “Quiero que juntas vayamos a Marte”
34,	// “Me haré astronauta iré”
36,	// “A la Luna o lo que sea”
37,	// “Si así puedo verte bien”
39,	// “Puedo verte bien”
41.5,	// “Si así puedo verte bien”
43.1,	// “Puedo verte bien, bien”
45,	// “Si así puedo verte bien”
47,	// “Puedo verte bien, bien”
49,	// “Si así puedo verte bien”
51,	// “Puedo verte bien, bien”
53,	// “Si así puedo verte bien”
55,	// “Puedo verte bien cerca”
58,	// “A veces siento que no entiendo nada”
62,	// “Y se me queda la lengua trabada”
66,	// “Y cuando intento explicarte que me pasa”
69.1,	// “Si te tengo delante”
71.1,	// “No puedo concentrarme”
74.2,	// “Y cuando bailo sola en los bares”
78,	// “Quiero que juntas”
79,	// “Vayamos a Marte”
82,	// “Me haré astronauta iré”
84,	// “A la Luna o lo que sea”
85,	// “Si así puedo verte bien”
87,	// “Puedo verte bien, bien”
90,	// “Te escribo esta canción”
92,	// “A corazón abierto”
93.5,	// “Porque to’ lo que siento”
95.5,	// “Cabe en un país entero”
98,	// “Te escribo esta canción”
99,	// “A corazón abierto”
101,	// “Porque to’ lo que siento”
103.5,	// “Cabe en un país entero”
105.5,	// “Te escribo esta canción”
107,	// “A corazón abierto”
109.5,	// “Porque to’ lo que siento”
111.5,	// “Cabe en un país entero”
113.5,	// “Te escribo esta canción”
115.5,	// “A corazón abierto”
117.5,	// “Porque to’ lo que siento”
119,	// “Cabe en un país entero”
122,	// “Puedo verte bien”
123.5,	// “Puedo verte bien, bien”
125,	// “Si así puedo verte bien”
127,	// “Puedo verte bie- bien”
129.5,	// “Si así puedo verte bien”
131.5,	// “Puedo verte bien, bien”
133.1,	// “Si así puedo verte bien”
135.5,	// “Puedo verte bien cerca”
138,	// “Puedo verte bien”
139.5,	// “Puedo verte bien, bien”
141,	// “Si así puedo verte bien”
143.5,	// “Puedo verte bie- bien”
146,	// “Si así puedo verte bien”
147.5,	// “Puedo verte bien, bien”
150,	// “Si así puedo verte bien”
151.5,	// “Puedo verte bien cerca”

    ];

    // Verifica que el audio y el loader existan
    if (!audio || !loader) return;

    const hideLoader = () => {
        loader.style.display = 'none';
        document.body.classList.remove("not-loaded");
    };

    audio.addEventListener('loadeddata', hideLoader); // Cuando los datos iniciales están cargados
    audio.addEventListener('canplay', hideLoader); // Cuando puede reproducirse
    audio.addEventListener('canplaythrough', hideLoader); // Cuando puede reproducirse sin interrupciones
    
    // 2. Timeout de respaldo por si falla la carga
    const backupTimeout = setTimeout(hideLoader, 5000); // 5 segundos máximo
    
    // 3. Manejar errores
    audio.addEventListener('error', () => {
        clearTimeout(backupTimeout);
        hideLoader();
    });

    let isPlaying = false;
    const handlePlayPause = () => {
        if (!isPlaying) {
            audio.play().catch(err => console.log("Esperando interacción..."));
            isPlaying = true;
        } else {
            audio.pause();
            isPlaying = false;
        }
    };
    
    // Agregar ambos tipos de eventos para móvil/desktop
    document.body.addEventListener('click', handlePlayPause);
    document.body.addEventListener('touchstart', handlePlayPause);

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        lyrics.forEach((lyric, index) => {
            if (currentTime >= lyricTimes[index] && currentTime < lyricTimes[index + 1]) {
                lyric.classList.add('active');
    
                if (index > 0) {
                    lyrics[index - 1].classList.remove('active');
                    lyrics[index - 1].classList.add('exit');
                }
            } else {
                lyric.classList.remove('active');
                lyric.classList.remove('exit');
            }
        });
    });
});

  
  
  
