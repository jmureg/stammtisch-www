(function () {
    const supportedLanguages = ['en', 'de', 'es', 'fr'];
    const languageNames = {
        en: 'English',
        de: 'Deutsch',
        es: 'Español',
        fr: 'Français'
    };

    const pageText = {
        en: {
            title: {
                home: 'Stammtisch.pro - Connect with Friends',
                locations: 'Host a Stammtisch - Partner Locations',
                privacy: 'Privacy Policy - Stammtisch',
                terms: 'Terms of Service - Stammtisch',
                join: 'Join Stammtisch'
            },
            metaDescription: {
                home: 'Stammtisch.pro - Stop the endless group chats. Find the best day, time, and place for your next meetup automatically. Available on iOS and Android.',
                locations: 'Partner with Stammtisch to bring regular groups to your restaurant or bar. Increase weekday traffic and build loyal customers.',
                privacy: 'Privacy Policy for Stammtisch, including how we collect, use, protect, and retain personal information.',
                terms: 'Terms of Service for Stammtisch, including user responsibilities, service limitations, venue terms, and contact information.',
                join: 'Join a Stammtisch group from your invitation link.'
            },
            strings: {}
        },
        de: {
            title: {
                home: 'Stammtisch.pro - Mit Freunden verbinden',
                locations: 'Einen Stammtisch ausrichten - Partnerlokale',
                privacy: 'Datenschutzerklärung - Stammtisch',
                terms: 'Nutzungsbedingungen - Stammtisch',
                join: 'Stammtisch beitreten'
            },
            metaDescription: {
                home: 'Stammtisch.pro - Schluss mit endlosen Gruppenchats. Finde automatisch den besten Tag, die beste Uhrzeit und den besten Ort für euer nächstes Treffen. Verfügbar für iOS und Android.',
                locations: 'Partner werden mit Stammtisch und regelmäßige Gruppen in dein Restaurant oder deine Bar bringen. Mehr Auslastung unter der Woche und treue Gäste aufbauen.',
                privacy: 'Datenschutzerklärung für Stammtisch, einschließlich Erhebung, Nutzung, Schutz und Speicherung personenbezogener Informationen.',
                terms: 'Nutzungsbedingungen für Stammtisch, einschließlich Nutzerpflichten, Leistungsgrenzen, Lokalbedingungen und Kontaktinformationen.',
                join: 'Einer Stammtisch-Gruppe über deinen Einladungslink beitreten.'
            },
            strings: {
                'What is a Stammtisch?': 'Was ist ein Stammtisch?',
                'A Stammtisch is a long-running German-speaking tradition: a regular table where people gather again and again to share conversation, food, drinks, and community.': 'Ein Stammtisch ist eine lange deutschsprachige Tradition: ein regelmäßiger Tisch, an dem Menschen immer wieder zusammenkommen, um Gespräche, Essen, Getränke und Gemeinschaft zu teilen.',
                'Today, a Stammtisch can be more flexible. It can move between favorite places, adapt to changing schedules, and help a group find the best date, time, and location without endless back-and-forth.': 'Heute kann ein Stammtisch flexibler sein. Er kann zwischen Lieblingsorten wechseln, sich an veränderte Zeitpläne anpassen und einer Gruppe helfen, den besten Termin, die beste Uhrzeit und den besten Ort zu finden, ohne endloses Hin und Her.',
                'Stammtisch.pro brings that practice into modern life: stay close to existing friends, make room for new connections, and turn good intentions into real meetups.': 'Stammtisch.pro bringt diese Praxis ins moderne Leben: mit bestehenden Freunden verbunden bleiben, Raum für neue Kontakte schaffen und gute Vorsätze in echte Treffen verwandeln.',
                'Your group chat is full of plans that never happen.': 'Euer Gruppenchat ist voll mit Plänen, die nie stattfinden.',
                '"Does Friday work?"': '"Passt Freitag?"',
                '"I can\'t."': '"Ich kann nicht."',
                '"What about next week?"': '"Wie wäre nächste Woche?"',
                '"Where do we meet again?"': '"Wo treffen wir uns nochmal?"',
                '…and suddenly it\'s been 3 months since you last met.': '...und plötzlich sind seit dem letzten Treffen drei Monate vergangen.',
                'Stammtisch fixes this — your group votes, the best option wins, and the plan is locked in.': 'Stammtisch löst das: Eure Gruppe stimmt ab, die beste Option gewinnt, und der Plan steht.',
                'Groups that use Stammtisch don\'t just plan more — they actually meet.': 'Gruppen, die Stammtisch nutzen, planen nicht nur mehr, sie treffen sich wirklich.',
                'Create your group': 'Gruppe erstellen',
                'See how Stammtisch works': 'So funktioniert Stammtisch',
                'Create your group, coordinate the plan, and keep the habit going with simple tools built for real meetups.': 'Erstelle deine Gruppe, koordiniere den Plan und halte die Gewohnheit mit einfachen Werkzeugen für echte Treffen am Laufen.',
                'Create a Stammtisch group in the app': 'Eine Stammtisch-Gruppe in der App erstellen',
                'Coordinate dates, places, votes, and chat': 'Termine, Orte, Abstimmungen und Chat koordinieren',
                'Track meeting streaks and attendance': 'Treffen-Serien und Teilnahme verfolgen',
                'Start with the essentials and decide whether your group is public or private.': 'Starte mit dem Wesentlichen und entscheide, ob deine Gruppe öffentlich oder privat ist.',
                'Coordinate the plan': 'Den Plan koordinieren',
                'Collect date and place ideas, vote together, and keep the conversation in one place.': 'Sammelt Termin- und Ortsideen, stimmt gemeinsam ab und haltet die Unterhaltung an einem Ort.',
                'Keep meeting': 'Dranbleiben und treffen',
                'See your rhythm, track attendance, and make the next gathering feel natural.': 'Sieh euren Rhythmus, verfolge die Teilnahme und lass das nächste Treffen selbstverständlich werden.',
                'Suggest dates & places': 'Termine & Orte vorschlagen',
                'Everyone votes': 'Alle stimmen ab',
                'Plan locked automatically': 'Plan automatisch festgelegt',
                'Android version currently available to whitelisted beta testers. Interested users can request access by submitting their Google Play Store-associated email address below.': 'Die Android-Version ist derzeit für freigeschaltete Betatester verfügbar. Interessierte können unten die mit dem Google Play Store verknüpfte E-Mail-Adresse einreichen.',
                'No More Scheduling Chaos': 'Kein Terminchaos mehr',
                'Propose dates and locations, vote with one tap. No more "does Tuesday work?" texts.': 'Termine und Orte vorschlagen, mit einem Tipp abstimmen. Keine "Passt Dienstag?"-Nachrichten mehr.',
                'The Best Spot, Decided Together': 'Der beste Ort, gemeinsam entschieden',
                'Members suggest and vote on locations. The winner is announced automatically.': 'Mitglieder schlagen Orte vor und stimmen ab. Der Gewinner wird automatisch bekannt gegeben.',
                'Everyone Stays in the Loop': 'Alle bleiben informiert',
                'Calendar invites, email reminders, and notifications. No one misses the next one.': 'Kalendereinladungen, E-Mail-Erinnerungen und Benachrichtigungen. Niemand verpasst das nächste Treffen.',
                'Democratic Voting': 'Demokratische Abstimmung',
                'Every member gets a voice. Propose and vote on dates and locations — the group decides, not one person.': 'Jedes Mitglied hat eine Stimme. Termine und Orte vorschlagen und abstimmen: Die Gruppe entscheidet, nicht eine einzelne Person.',
                'Recurring Made Easy': 'Wiederkehrende Treffen leicht gemacht',
                'Weekly, biweekly, or monthly — set your cadence and Stammtisch keeps the rhythm going automatically.': 'Wöchentlich, zweiwöchentlich oder monatlich: Legt euren Rhythmus fest, Stammtisch hält ihn automatisch am Laufen.',
                'Discover Nearby Groups': 'Gruppen in der Nähe entdecken',
                'Browse the map to find open stammtische near you and request to join with one tap.': 'Durchsuche die Karte nach offenen Stammtischen in deiner Nähe und frage mit einem Tipp den Beitritt an.',
                'Simple Pricing': 'Einfache Preise',
                'Start free. Upgrade when you\'re ready.': 'Kostenlos starten. Upgraden, wenn du bereit bist.',
                'Standard': 'Standard',
                'Free': 'Kostenlos',
                '1 stammtisch': '1 Stammtisch',
                'Up to 5 members': 'Bis zu 5 Mitglieder',
                'Date/location voting': 'Termin- und Ortsabstimmung',
                'Notifications & email': 'Benachrichtigungen & E-Mail',
                'Calendar integration': 'Kalenderintegration',
                'Get Started': 'Loslegen',
                'Up to 10 stammtische': 'Bis zu 10 Stammtische',
                'Up to 50 members': 'Bis zu 50 Mitglieder',
                'Ad-free experience': 'Werbefreie Nutzung',
                'Analytics dashboard': 'Analyse-Dashboard',
                'Custom branding/themes': 'Eigenes Branding/Themes',
                'Data export': 'Datenexport',
                'Priority support': 'Priorisierter Support',
                'Start Free Trial': 'Kostenlose Testphase starten',
                '3-month free trial included': '3 Monate kostenlose Testphase inklusive',
                'Get in Touch': 'Kontakt aufnehmen',
                'Questions or feedback? Send us a message!': 'Fragen oder Feedback? Schreib uns eine Nachricht!',
                'Send': 'Senden',
                'Submitting...': 'Wird gesendet...',
                'Sent!': 'Gesendet!',
                '✅ Thanks! We\'ll be in touch soon.': 'Danke! Wir melden uns bald.',
                '⚠️ Oops! Something went wrong. Please try again.': 'Ups! Etwas ist schiefgelaufen. Bitte versuche es erneut.',
                'Own a Restaurant or Bar?': 'Du besitzt ein Restaurant oder eine Bar?',
                'Partner with Stammtisch to connect with groups looking for venues. Help attract customers during slower periods and build community connections.': 'Werde Partner von Stammtisch und erreiche Gruppen, die nach Orten suchen. Hilf, ruhigere Zeiten zu beleben und Community-Verbindungen aufzubauen.',
                '🍺 Learn About Partner Program': 'Partnerprogramm ansehen',
                'Terms of Service': 'Nutzungsbedingungen',
                'Privacy Policy': 'Datenschutzerklärung',
                'By using Stammtisch, you agree to our Terms of Service. Users attend gatherings at their own risk.': 'Durch die Nutzung von Stammtisch stimmst du unseren Nutzungsbedingungen zu. Nutzer nehmen auf eigene Verantwortung an Treffen teil.',
                'Home': 'Startseite',
                'For Venues': 'Für Lokale',
                'Privacy': 'Datenschutz',
                '🍺 Partner Program': 'Partnerprogramm',
                'Help Fill Empty Tables With Regular Customers': 'Füllen Sie leere Tische mit regelmäßigen Gästen',
                'Join restaurants and bars hosting Stammtisch groups. Our platform can help you get more reservations, attract new customers during slower periods, and build a loyal community—all while getting free promotion in our app.': 'Schließen Sie sich Restaurants und Bars an, die Stammtisch-Gruppen empfangen. Unsere Plattform kann helfen, mehr Reservierungen zu erhalten, in ruhigeren Zeiten neue Gäste anzuziehen und eine treue Community aufzubauen - inklusive kostenloser Präsenz in unserer App.',
                'Potential weekly visits per group*': 'Potenzielle wöchentliche Besuche pro Gruppe*',
                'Typical people per gathering*': 'Typische Personen pro Treffen*',
                'Free to join': 'Kostenlose Teilnahme',
                '*Results may vary. No guarantees of specific outcomes.': '*Ergebnisse können variieren. Keine Garantie für bestimmte Resultate.',
                'Why Partner With Stammtisch?': 'Warum Partner von Stammtisch werden?',
                'More Predictable Bookings': 'Planbarere Buchungen',
                'Stammtisch groups typically meet bi-weekly, monthly, or quarterly, which may help you plan for recurring reservations.': 'Stammtisch-Gruppen treffen sich typischerweise zweiwöchentlich, monatlich oder vierteljährlich. Das kann bei wiederkehrenden Reservierungen helfen.',
                'Attract New Customers': 'Neue Gäste gewinnen',
                'Each group can bring 4-15 people who may not have visited before. Great experiences can turn first-time guests into regulars.': 'Jede Gruppe kann 4 bis 15 Personen bringen, die vielleicht noch nie bei Ihnen waren. Gute Erlebnisse können Erstgäste zu Stammgästen machen.',
                'Free App Promotion': 'Kostenlose App-Präsenz',
                'Your venue can be featured in the Stammtisch app with photos, menu highlights, and directions—reaching local users at no cost.': 'Ihr Lokal kann kostenlos in der Stammtisch-App mit Fotos, Speisekarten-Highlights und Wegbeschreibung erscheinen.',
                'Target Slower Periods': 'Ruhigere Zeiten nutzen',
                'Many groups prefer Monday-Thursday evenings. This can help you attract customers during traditionally quieter times.': 'Viele Gruppen bevorzugen Montag- bis Donnerstagabende. Das kann helfen, traditionell ruhigere Zeiten zu beleben.',
                'Build Community': 'Community aufbauen',
                'Become a gathering spot for local communities. Groups that enjoy your venue may return regularly and recommend you to others.': 'Werden Sie ein Treffpunkt für lokale Communities. Gruppen, denen Ihr Lokal gefällt, kommen vielleicht regelmäßig wieder und empfehlen Sie weiter.',
                'No Commission Fees': 'Keine Provisionen',
                'Unlike delivery apps, we don\'t take a cut of your sales. You keep 100% of revenue from groups that visit.': 'Anders als Liefer-Apps behalten wir keinen Anteil Ihres Umsatzes ein. Sie behalten 100% der Umsätze durch besuchende Gruppen.',
                'How It Works': 'So funktioniert es',
                'Submit Your Venue': 'Lokal einreichen',
                'Fill out the form below with your details and availability': 'Füllen Sie das Formular unten mit Details und Verfügbarkeiten aus',
                'Get Listed': 'Gelistet werden',
                'We add your location to the app with photos and details': 'Wir nehmen Ihren Ort mit Fotos und Details in die App auf',
                'Welcome Groups': 'Gruppen empfangen',
                'Groups book directly through the app and visit regularly': 'Gruppen buchen direkt über die App und kommen regelmäßig',
                'Grow Together': 'Gemeinsam wachsen',
                'Build relationships and watch your regulars multiply': 'Beziehungen aufbauen und mehr Stammgäste gewinnen',
                'Become a Partner Venue': 'Partnerlokal werden',
                'Submit your restaurant or bar to start hosting Stammtisch groups': 'Reichen Sie Ihr Restaurant oder Ihre Bar ein, um Stammtisch-Gruppen zu empfangen',
                'Restaurant/Bar Name': 'Name des Restaurants/der Bar',
                'Contact Person': 'Ansprechperson',
                'Email': 'E-Mail',
                'Phone Number': 'Telefonnummer',
                'Website': 'Website',
                'Full Address': 'Vollständige Adresse',
                'Special Offer for First Groups': 'Sonderangebot für erste Gruppen',
                'Number of Groups for Special Offer': 'Anzahl der Gruppen für das Sonderangebot',
                'Preferred Days & Times': 'Bevorzugte Tage & Zeiten',
                'Monday Evening': 'Montagabend',
                'Tuesday Evening': 'Dienstagabend',
                'Wednesday Evening': 'Mittwochabend',
                'Thursday Evening': 'Donnerstagabend',
                'Friday Evening': 'Freitagabend',
                'Saturday Afternoon': 'Samstagnachmittag',
                'Saturday Evening': 'Samstagabend',
                'Sunday Afternoon': 'Sonntagnachmittag',
                'Additional Information': 'Weitere Informationen',
                'Submit Partnership Request': 'Partnerschaftsanfrage senden',
                'Submitted Successfully!': 'Erfolgreich gesendet!',
                '✅ Thank you! We\'ll review your submission and contact you within 2-3 business days.': 'Danke! Wir prüfen Ihre Anfrage und melden uns innerhalb von 2-3 Werktagen.',
                '⚠️ Something went wrong. Please try again or email us directly.': 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.',
                'Results and outcomes may vary by venue. Stammtisch provides a platform to connect venues with groups but does not guarantee specific business results, customer volume, or revenue increases.': 'Ergebnisse können je nach Lokal variieren. Stammtisch stellt eine Plattform bereit, um Lokale mit Gruppen zu verbinden, garantiert aber keine bestimmten Geschäftsergebnisse, Besucherzahlen oder Umsatzsteigerungen.',
                '← Back to Home': '← Zurück zur Startseite',
                'Back to Home': 'Zurück zur Startseite',
                'Last Updated: March 2, 2026': 'Zuletzt aktualisiert: 2. März 2026',
                'Effective Date:': 'Gültig ab:',
                'Last Updated:': 'Zuletzt aktualisiert:',
                'Introduction': 'Einleitung',
                'Information We Collect': 'Welche Informationen wir erfassen',
                'How We Use Your Information': 'Wie wir Ihre Informationen nutzen',
                'Legal Basis for Processing (GDPR)': 'Rechtsgrundlage der Verarbeitung (DSGVO)',
                'Information Sharing and Disclosure': 'Weitergabe und Offenlegung von Informationen',
                'Data Security': 'Datensicherheit',
                'Data Retention': 'Datenspeicherung',
                'Your Rights (GDPR & CCPA)': 'Ihre Rechte (DSGVO & CCPA)',
                'International Data Transfers': 'Internationale Datenübermittlungen',
                'Children\'s Privacy': 'Datenschutz von Kindern',
                'Cookies and Tracking': 'Cookies und Tracking',
                'Third-Party Services': 'Dienste von Drittanbietern',
                'California Privacy Rights (CCPA)': 'Kalifornische Datenschutzrechte (CCPA)',
                'Updates to This Policy': 'Aktualisierungen dieser Richtlinie',
                'Data Protection Officer': 'Datenschutzbeauftragter',
                'Contact Information': 'Kontaktinformationen',
                'Definitions': 'Definitionen',
                'Opening Stammtisch App...': 'Stammtisch-App wird geöffnet...',
                'Please wait while we redirect you to the app.': 'Bitte warten, während wir Sie zur App weiterleiten.',
                'Download Stammtisch': 'Stammtisch herunterladen',
                'To join this group, please download the Stammtisch app first.': 'Um dieser Gruppe beizutreten, laden Sie bitte zuerst die Stammtisch-App herunter.',
                'Redirecting you now.': 'Sie werden jetzt weitergeleitet.',
                'To join this group, please download the Stammtisch app.': 'Um dieser Gruppe beizutreten, laden Sie bitte die Stammtisch-App herunter.',
                'Learn More': 'Mehr erfahren',
                'Download on App Store': 'Im App Store laden',
                '🍻 Join Stammtisch': 'Stammtisch beitreten',
                'You\'ve been invited to join a group!': 'Sie wurden eingeladen, einer Gruppe beizutreten!',
                'Open in App': 'In der App öffnen',
                'Don\'t have the app yet?': 'Noch keine App?',
                'Download from App Store': 'Aus dem App Store laden'
            },
            placeholders: {
                'Your name (optional)': 'Ihr Name (optional)',
                'Your email': 'Ihre E-Mail',
                'Message (optional)': 'Nachricht (optional)',
                'The Golden Pint': 'Zum Goldenen Krug',
                'John Smith': 'Max Mustermann',
                'john@goldenpint.com': 'max@lokal.de',
                '(555) 123-4567': '+49 30 123456',
                'goldenpint.com': 'lokal.de',
                '123 Main St, San Francisco, CA 94102': 'Musterstraße 1, 10115 Berlin',
                'Example: 10% off first visit, free appetizer for groups of 10+, complimentary round of drinks, etc.': 'Beispiel: 10% Rabatt beim ersten Besuch, kostenlose Vorspeise für Gruppen ab 10 Personen, Begrüßungsrunde usw.',
                'e.g., 5': 'z. B. 5',
                'Tell us about your venue, capacity for groups, any special features or amenities...': 'Erzählen Sie uns von Ihrem Lokal, der Gruppenkapazität und besonderen Angeboten oder Ausstattungen...'
            }
        },
        es: {
            title: {
                home: 'Stammtisch.pro - Conecta con amigos',
                locations: 'Organiza un Stammtisch - Locales asociados',
                privacy: 'Politica de privacidad - Stammtisch',
                terms: 'Terminos de servicio - Stammtisch',
                join: 'Unirse a Stammtisch'
            },
            metaDescription: {
                home: 'Stammtisch.pro - Deja atras los chats de grupo interminables. Encuentra automaticamente el mejor dia, hora y lugar para tu proxima reunion. Disponible en iOS y Android.',
                locations: 'Asociate con Stammtisch para llevar grupos habituales a tu restaurante o bar. Aumenta el trafico entre semana y crea clientes fieles.',
                privacy: 'Politica de privacidad de Stammtisch, incluida la forma en que recopilamos, usamos, protegemos y conservamos informacion personal.',
                terms: 'Terminos de servicio de Stammtisch, incluidas responsabilidades del usuario, limitaciones del servicio, condiciones para locales e informacion de contacto.',
                join: 'Unete a un grupo de Stammtisch desde tu enlace de invitacion.'
            },
            strings: {
                'What is a Stammtisch?': '¿Qué es un Stammtisch?',
                'A Stammtisch is a long-running German-speaking tradition: a regular table where people gather again and again to share conversation, food, drinks, and community.': 'Un Stammtisch es una tradición de larga data en los países de habla alemana: una mesa habitual donde las personas se reúnen una y otra vez para compartir conversación, comida, bebidas y comunidad.',
                'Today, a Stammtisch can be more flexible. It can move between favorite places, adapt to changing schedules, and help a group find the best date, time, and location without endless back-and-forth.': 'Hoy, un Stammtisch puede ser más flexible. Puede moverse entre lugares favoritos, adaptarse a horarios cambiantes y ayudar a un grupo a encontrar la mejor fecha, hora y ubicación sin idas y vueltas interminables.',
                'Stammtisch.pro brings that practice into modern life: stay close to existing friends, make room for new connections, and turn good intentions into real meetups.': 'Stammtisch.pro lleva esa práctica a la vida moderna: mantén cerca a tus amigos, abre espacio para nuevas conexiones y convierte las buenas intenciones en encuentros reales.',
                'Your group chat is full of plans that never happen.': 'Tu chat de grupo esta lleno de planes que nunca ocurren.',
                '"Does Friday work?"': '"¿El viernes va bien?"',
                '"I can\'t."': '"No puedo."',
                '"What about next week?"': '"¿Y la semana que viene?"',
                '"Where do we meet again?"': '"¿Donde quedamos otra vez?"',
                '…and suddenly it\'s been 3 months since you last met.': '...y de repente han pasado 3 meses desde la ultima vez.',
                'Stammtisch fixes this — your group votes, the best option wins, and the plan is locked in.': 'Stammtisch lo soluciona: tu grupo vota, gana la mejor opcion y el plan queda confirmado.',
                'Groups that use Stammtisch don\'t just plan more — they actually meet.': 'Los grupos que usan Stammtisch no solo planean mas: se reunen de verdad.',
                'Create your group': 'Crea tu grupo',
                'See how Stammtisch works': 'Mira cómo funciona Stammtisch',
                'Create your group, coordinate the plan, and keep the habit going with simple tools built for real meetups.': 'Crea tu grupo, coordina el plan y mantén el hábito con herramientas simples pensadas para encuentros reales.',
                'Create a Stammtisch group in the app': 'Crear un grupo Stammtisch en la app',
                'Coordinate dates, places, votes, and chat': 'Coordinar fechas, lugares, votos y chat',
                'Track meeting streaks and attendance': 'Seguir rachas de encuentros y asistencia',
                'Start with the essentials and decide whether your group is public or private.': 'Empieza con lo esencial y decide si tu grupo será público o privado.',
                'Coordinate the plan': 'Coordina el plan',
                'Collect date and place ideas, vote together, and keep the conversation in one place.': 'Reúne ideas de fechas y lugares, voten juntos y mantengan la conversación en un solo lugar.',
                'Keep meeting': 'Sigan reuniéndose',
                'See your rhythm, track attendance, and make the next gathering feel natural.': 'Ve el ritmo del grupo, sigue la asistencia y haz que el próximo encuentro surja con naturalidad.',
                'Suggest dates & places': 'Propone fechas y lugares',
                'Everyone votes': 'Todos votan',
                'Plan locked automatically': 'Plan confirmado automaticamente',
                'Android version currently available to whitelisted beta testers. Interested users can request access by submitting their Google Play Store-associated email address below.': 'La version de Android esta disponible actualmente para beta testers autorizados. Los usuarios interesados pueden solicitar acceso enviando abajo el correo asociado a Google Play Store.',
                'No More Scheduling Chaos': 'Se acabo el caos para coordinar',
                'Propose dates and locations, vote with one tap. No more "does Tuesday work?" texts.': 'Propone fechas y lugares, vota con un toque. No mas mensajes de "¿el martes va bien?".',
                'The Best Spot, Decided Together': 'El mejor lugar, decidido juntos',
                'Members suggest and vote on locations. The winner is announced automatically.': 'Los miembros proponen y votan lugares. El ganador se anuncia automaticamente.',
                'Everyone Stays in the Loop': 'Todos estan al tanto',
                'Calendar invites, email reminders, and notifications. No one misses the next one.': 'Invitaciones de calendario, recordatorios por correo y notificaciones. Nadie se pierde la proxima.',
                'Democratic Voting': 'Votacion democratica',
                'Every member gets a voice. Propose and vote on dates and locations — the group decides, not one person.': 'Cada miembro tiene voz. Propongan y voten fechas y lugares: decide el grupo, no una sola persona.',
                'Recurring Made Easy': 'Reuniones recurrentes sin esfuerzo',
                'Weekly, biweekly, or monthly — set your cadence and Stammtisch keeps the rhythm going automatically.': 'Semanal, quincenal o mensual: define el ritmo y Stammtisch lo mantiene automaticamente.',
                'Discover Nearby Groups': 'Descubre grupos cercanos',
                'Browse the map to find open stammtische near you and request to join with one tap.': 'Explora el mapa para encontrar stammtische abiertos cerca de ti y solicita unirte con un toque.',
                'Simple Pricing': 'Precios simples',
                'Start free. Upgrade when you\'re ready.': 'Empieza gratis. Mejora cuando estes listo.',
                'Standard': 'Estandar',
                'Free': 'Gratis',
                '1 stammtisch': '1 stammtisch',
                'Up to 5 members': 'Hasta 5 miembros',
                'Date/location voting': 'Votacion de fecha/lugar',
                'Notifications & email': 'Notificaciones y correo',
                'Calendar integration': 'Integracion con calendario',
                'Get Started': 'Empezar',
                'Up to 10 stammtische': 'Hasta 10 stammtische',
                'Up to 50 members': 'Hasta 50 miembros',
                'Ad-free experience': 'Experiencia sin anuncios',
                'Analytics dashboard': 'Panel de analitica',
                'Custom branding/themes': 'Marca/temas personalizados',
                'Data export': 'Exportacion de datos',
                'Priority support': 'Soporte prioritario',
                'Start Free Trial': 'Iniciar prueba gratis',
                '3-month free trial included': 'Incluye prueba gratis de 3 meses',
                'Get in Touch': 'Contactanos',
                'Questions or feedback? Send us a message!': '¿Preguntas o comentarios? Envianos un mensaje.',
                'Send': 'Enviar',
                'Submitting...': 'Enviando...',
                'Sent!': 'Enviado.',
                '✅ Thanks! We\'ll be in touch soon.': 'Gracias. Nos pondremos en contacto pronto.',
                '⚠️ Oops! Something went wrong. Please try again.': 'Vaya, algo salio mal. Intentalo de nuevo.',
                'Own a Restaurant or Bar?': '¿Tienes un restaurante o bar?',
                'Partner with Stammtisch to connect with groups looking for venues. Help attract customers during slower periods and build community connections.': 'Asociate con Stammtisch para conectar con grupos que buscan locales. Ayuda a atraer clientes en horas mas tranquilas y crea comunidad.',
                '🍺 Learn About Partner Program': 'Ver programa de socios',
                'Terms of Service': 'Terminos de servicio',
                'Privacy Policy': 'Politica de privacidad',
                'By using Stammtisch, you agree to our Terms of Service. Users attend gatherings at their own risk.': 'Al usar Stammtisch, aceptas nuestros Terminos de servicio. Los usuarios asisten a reuniones bajo su propia responsabilidad.',
                'Home': 'Inicio',
                'For Venues': 'Para locales',
                'Privacy': 'Privacidad',
                '🍺 Partner Program': 'Programa de socios',
                'Help Fill Empty Tables With Regular Customers': 'Ayuda a llenar mesas vacias con clientes habituales',
                'Join restaurants and bars hosting Stammtisch groups. Our platform can help you get more reservations, attract new customers during slower periods, and build a loyal community—all while getting free promotion in our app.': 'Unete a restaurantes y bares que reciben grupos de Stammtisch. Nuestra plataforma puede ayudarte a conseguir mas reservas, atraer clientes en periodos tranquilos y crear una comunidad fiel, con promocion gratuita en la app.',
                'Potential weekly visits per group*': 'Visitas semanales potenciales por grupo*',
                'Typical people per gathering*': 'Personas tipicas por reunion*',
                'Free to join': 'Gratis para unirse',
                '*Results may vary. No guarantees of specific outcomes.': '*Los resultados pueden variar. No se garantizan resultados especificos.',
                'Why Partner With Stammtisch?': '¿Por que asociarte con Stammtisch?',
                'More Predictable Bookings': 'Reservas mas predecibles',
                'Stammtisch groups typically meet bi-weekly, monthly, or quarterly, which may help you plan for recurring reservations.': 'Los grupos de Stammtisch suelen reunirse cada dos semanas, mensualmente o trimestralmente, lo que puede ayudarte a planificar reservas recurrentes.',
                'Attract New Customers': 'Atrae nuevos clientes',
                'Each group can bring 4-15 people who may not have visited before. Great experiences can turn first-time guests into regulars.': 'Cada grupo puede traer entre 4 y 15 personas que quiza no te conocian. Una gran experiencia puede convertirlas en clientes habituales.',
                'Free App Promotion': 'Promocion gratis en la app',
                'Your venue can be featured in the Stammtisch app with photos, menu highlights, and directions—reaching local users at no cost.': 'Tu local puede aparecer en la app de Stammtisch con fotos, destacados del menu e indicaciones, llegando a usuarios locales sin coste.',
                'Target Slower Periods': 'Aprovecha periodos tranquilos',
                'Many groups prefer Monday-Thursday evenings. This can help you attract customers during traditionally quieter times.': 'Muchos grupos prefieren las noches de lunes a jueves. Esto puede ayudarte a atraer clientes en horarios tradicionalmente mas tranquilos.',
                'Build Community': 'Crea comunidad',
                'Become a gathering spot for local communities. Groups that enjoy your venue may return regularly and recommend you to others.': 'Conviertete en punto de encuentro para comunidades locales. Los grupos que disfruten tu local pueden volver y recomendarte.',
                'No Commission Fees': 'Sin comisiones',
                'Unlike delivery apps, we don\'t take a cut of your sales. You keep 100% of revenue from groups that visit.': 'A diferencia de las apps de delivery, no nos quedamos con parte de tus ventas. Conservas el 100% de los ingresos de los grupos que te visitan.',
                'How It Works': 'Como funciona',
                'Submit Your Venue': 'Envia tu local',
                'Fill out the form below with your details and availability': 'Completa el formulario con tus datos y disponibilidad',
                'Get Listed': 'Aparece en la app',
                'We add your location to the app with photos and details': 'Anadimos tu local a la app con fotos y detalles',
                'Welcome Groups': 'Recibe grupos',
                'Groups book directly through the app and visit regularly': 'Los grupos reservan desde la app y visitan regularmente',
                'Grow Together': 'Crezcan juntos',
                'Build relationships and watch your regulars multiply': 'Crea relaciones y ve crecer tus clientes habituales',
                'Become a Partner Venue': 'Conviertete en local asociado',
                'Submit your restaurant or bar to start hosting Stammtisch groups': 'Envia tu restaurante o bar para empezar a recibir grupos de Stammtisch',
                'Restaurant/Bar Name': 'Nombre del restaurante/bar',
                'Contact Person': 'Persona de contacto',
                'Email': 'Correo',
                'Phone Number': 'Telefono',
                'Website': 'Sitio web',
                'Full Address': 'Direccion completa',
                'Special Offer for First Groups': 'Oferta especial para primeros grupos',
                'Number of Groups for Special Offer': 'Numero de grupos para la oferta',
                'Preferred Days & Times': 'Dias y horarios preferidos',
                'Monday Evening': 'Lunes por la noche',
                'Tuesday Evening': 'Martes por la noche',
                'Wednesday Evening': 'Miercoles por la noche',
                'Thursday Evening': 'Jueves por la noche',
                'Friday Evening': 'Viernes por la noche',
                'Saturday Afternoon': 'Sabado por la tarde',
                'Saturday Evening': 'Sabado por la noche',
                'Sunday Afternoon': 'Domingo por la tarde',
                'Additional Information': 'Informacion adicional',
                'Submit Partnership Request': 'Enviar solicitud de asociacion',
                'Submitted Successfully!': 'Enviado correctamente.',
                '✅ Thank you! We\'ll review your submission and contact you within 2-3 business days.': 'Gracias. Revisaremos tu solicitud y te contactaremos en 2-3 dias laborables.',
                '⚠️ Something went wrong. Please try again or email us directly.': 'Algo salio mal. Intentalo de nuevo o escribenos directamente.',
                'Results and outcomes may vary by venue. Stammtisch provides a platform to connect venues with groups but does not guarantee specific business results, customer volume, or revenue increases.': 'Los resultados pueden variar segun el local. Stammtisch ofrece una plataforma para conectar locales con grupos, pero no garantiza resultados comerciales, volumen de clientes ni aumentos de ingresos.',
                '← Back to Home': '← Volver al inicio',
                'Back to Home': 'Volver al inicio',
                'Last Updated: March 2, 2026': 'Ultima actualizacion: 2 de marzo de 2026',
                'Effective Date:': 'Fecha de entrada en vigor:',
                'Last Updated:': 'Ultima actualizacion:',
                'Introduction': 'Introduccion',
                'Information We Collect': 'Informacion que recopilamos',
                'How We Use Your Information': 'Como usamos tu informacion',
                'Legal Basis for Processing (GDPR)': 'Base legal del tratamiento (RGPD)',
                'Information Sharing and Disclosure': 'Comparticion y divulgacion de informacion',
                'Data Security': 'Seguridad de los datos',
                'Data Retention': 'Retencion de datos',
                'Your Rights (GDPR & CCPA)': 'Tus derechos (RGPD y CCPA)',
                'International Data Transfers': 'Transferencias internacionales de datos',
                'Children\'s Privacy': 'Privacidad de menores',
                'Cookies and Tracking': 'Cookies y seguimiento',
                'Third-Party Services': 'Servicios de terceros',
                'California Privacy Rights (CCPA)': 'Derechos de privacidad de California (CCPA)',
                'Updates to This Policy': 'Actualizaciones de esta politica',
                'Data Protection Officer': 'Delegado de proteccion de datos',
                'Contact Information': 'Informacion de contacto',
                'Definitions': 'Definiciones',
                'Opening Stammtisch App...': 'Abriendo la app Stammtisch...',
                'Please wait while we redirect you to the app.': 'Espera mientras te redirigimos a la app.',
                'Download Stammtisch': 'Descargar Stammtisch',
                'To join this group, please download the Stammtisch app first.': 'Para unirte a este grupo, descarga primero la app Stammtisch.',
                'Redirecting you now.': 'Te estamos redirigiendo.',
                'To join this group, please download the Stammtisch app.': 'Para unirte a este grupo, descarga la app Stammtisch.',
                'Learn More': 'Mas informacion',
                'Download on App Store': 'Descargar en App Store',
                '🍻 Join Stammtisch': 'Unirse a Stammtisch',
                'You\'ve been invited to join a group!': 'Te han invitado a unirte a un grupo.',
                'Open in App': 'Abrir en la app',
                'Don\'t have the app yet?': '¿Aun no tienes la app?',
                'Download from App Store': 'Descargar desde App Store'
            },
            placeholders: {
                'Your name (optional)': 'Tu nombre (opcional)',
                'Your email': 'Tu correo',
                'Message (optional)': 'Mensaje (opcional)',
                'The Golden Pint': 'La Jarra Dorada',
                'John Smith': 'Juan Perez',
                'john@goldenpint.com': 'juan@local.com',
                '(555) 123-4567': '+34 600 123 456',
                'goldenpint.com': 'local.com',
                '123 Main St, San Francisco, CA 94102': 'Calle Mayor 1, 28013 Madrid',
                'Example: 10% off first visit, free appetizer for groups of 10+, complimentary round of drinks, etc.': 'Ejemplo: 10% de descuento en la primera visita, aperitivo gratis para grupos de 10+, ronda de bienvenida, etc.',
                'e.g., 5': 'p. ej., 5',
                'Tell us about your venue, capacity for groups, any special features or amenities...': 'Cuentanos sobre tu local, capacidad para grupos y cualquier caracteristica o servicio especial...'
            }
        },
        fr: {
            title: {
                home: 'Stammtisch.pro - Retrouvez vos amis',
                locations: 'Accueillir un Stammtisch - Lieux partenaires',
                privacy: 'Politique de confidentialite - Stammtisch',
                terms: 'Conditions d’utilisation - Stammtisch',
                join: 'Rejoindre Stammtisch'
            },
            metaDescription: {
                home: 'Stammtisch.pro - Fini les discussions de groupe interminables. Trouvez automatiquement le meilleur jour, la meilleure heure et le meilleur lieu pour votre prochaine rencontre. Disponible sur iOS et Android.',
                locations: 'Devenez partenaire de Stammtisch pour accueillir des groupes reguliers dans votre restaurant ou bar. Augmentez la frequentation en semaine et fidelisez vos clients.',
                privacy: 'Politique de confidentialite de Stammtisch, notamment la collecte, l’utilisation, la protection et la conservation des informations personnelles.',
                terms: 'Conditions d’utilisation de Stammtisch, notamment les responsabilites des utilisateurs, les limites du service, les conditions pour les lieux et les coordonnees.',
                join: 'Rejoignez un groupe Stammtisch depuis votre lien d’invitation.'
            },
            strings: {
                'What is a Stammtisch?': 'Qu’est-ce qu’un Stammtisch ?',
                'A Stammtisch is a long-running German-speaking tradition: a regular table where people gather again and again to share conversation, food, drinks, and community.': 'Un Stammtisch est une tradition ancienne des pays germanophones : une table régulière où les gens se retrouvent encore et encore pour partager conversation, repas, boissons et esprit de communauté.',
                'Today, a Stammtisch can be more flexible. It can move between favorite places, adapt to changing schedules, and help a group find the best date, time, and location without endless back-and-forth.': 'Aujourd’hui, un Stammtisch peut être plus flexible. Il peut changer de lieu favori, s’adapter aux emplois du temps et aider un groupe à trouver la meilleure date, la meilleure heure et le meilleur endroit sans échanges interminables.',
                'Stammtisch.pro brings that practice into modern life: stay close to existing friends, make room for new connections, and turn good intentions into real meetups.': 'Stammtisch.pro fait entrer cette pratique dans la vie moderne : rester proche de ses amis, laisser de la place aux nouvelles rencontres et transformer les bonnes intentions en vrais rendez-vous.',
                'Your group chat is full of plans that never happen.': 'Votre discussion de groupe est pleine de projets qui ne se concretisent jamais.',
                '"Does Friday work?"': '"Vendredi, ca marche ?"',
                '"I can\'t."': '"Je ne peux pas."',
                '"What about next week?"': '"Et la semaine prochaine ?"',
                '"Where do we meet again?"': '"On se retrouve ou deja ?"',
                '…and suddenly it\'s been 3 months since you last met.': '...et soudain, trois mois ont passe depuis votre derniere rencontre.',
                'Stammtisch fixes this — your group votes, the best option wins, and the plan is locked in.': 'Stammtisch regle ca : votre groupe vote, la meilleure option gagne et le plan est confirme.',
                'Groups that use Stammtisch don\'t just plan more — they actually meet.': 'Les groupes qui utilisent Stammtisch ne planifient pas seulement davantage : ils se voient vraiment.',
                'Create your group': 'Creez votre groupe',
                'See how Stammtisch works': 'Découvrez le fonctionnement de Stammtisch',
                'Create your group, coordinate the plan, and keep the habit going with simple tools built for real meetups.': 'Créez votre groupe, coordonnez le plan et gardez le rythme grâce à des outils simples pensés pour de vraies rencontres.',
                'Create a Stammtisch group in the app': 'Créer un groupe Stammtisch dans l’app',
                'Coordinate dates, places, votes, and chat': 'Coordonner dates, lieux, votes et discussion',
                'Track meeting streaks and attendance': 'Suivre les séries de rencontres et la participation',
                'Start with the essentials and decide whether your group is public or private.': 'Commencez par l’essentiel et choisissez si votre groupe est public ou privé.',
                'Coordinate the plan': 'Coordonner le plan',
                'Collect date and place ideas, vote together, and keep the conversation in one place.': 'Rassemblez les idées de dates et de lieux, votez ensemble et gardez la conversation au même endroit.',
                'Keep meeting': 'Continuez à vous retrouver',
                'See your rhythm, track attendance, and make the next gathering feel natural.': 'Visualisez votre rythme, suivez la participation et rendez la prochaine rencontre naturelle.',
                'Suggest dates & places': 'Proposez dates et lieux',
                'Everyone votes': 'Tout le monde vote',
                'Plan locked automatically': 'Plan confirme automatiquement',
                'Android version currently available to whitelisted beta testers. Interested users can request access by submitting their Google Play Store-associated email address below.': 'La version Android est actuellement disponible pour les beta-testeurs autorises. Les personnes interessees peuvent demander l’acces en indiquant ci-dessous l’adresse e-mail associee a Google Play Store.',
                'No More Scheduling Chaos': 'Fini le chaos des agendas',
                'Propose dates and locations, vote with one tap. No more "does Tuesday work?" texts.': 'Proposez des dates et des lieux, votez en un geste. Fini les messages "mardi, ca marche ?".',
                'The Best Spot, Decided Together': 'Le meilleur lieu, choisi ensemble',
                'Members suggest and vote on locations. The winner is announced automatically.': 'Les membres proposent et votent pour les lieux. Le gagnant est annonce automatiquement.',
                'Everyone Stays in the Loop': 'Tout le monde reste informe',
                'Calendar invites, email reminders, and notifications. No one misses the next one.': 'Invitations calendrier, rappels par e-mail et notifications. Personne ne manque la prochaine rencontre.',
                'Democratic Voting': 'Vote democratique',
                'Every member gets a voice. Propose and vote on dates and locations — the group decides, not one person.': 'Chaque membre a voix au chapitre. Proposez et votez pour les dates et lieux : le groupe decide, pas une seule personne.',
                'Recurring Made Easy': 'Les rencontres regulieres simplifiees',
                'Weekly, biweekly, or monthly — set your cadence and Stammtisch keeps the rhythm going automatically.': 'Hebdomadaire, toutes les deux semaines ou mensuel : definissez votre rythme et Stammtisch le maintient automatiquement.',
                'Discover Nearby Groups': 'Decouvrez les groupes proches',
                'Browse the map to find open stammtische near you and request to join with one tap.': 'Parcourez la carte pour trouver des stammtische ouverts pres de vous et demander a les rejoindre en un geste.',
                'Simple Pricing': 'Tarifs simples',
                'Start free. Upgrade when you\'re ready.': 'Commencez gratuitement. Passez a l’offre superieure quand vous etes pret.',
                'Standard': 'Standard',
                'Free': 'Gratuit',
                '1 stammtisch': '1 stammtisch',
                'Up to 5 members': 'Jusqu’a 5 membres',
                'Date/location voting': 'Vote date/lieu',
                'Notifications & email': 'Notifications et e-mail',
                'Calendar integration': 'Integration calendrier',
                'Get Started': 'Commencer',
                'Up to 10 stammtische': 'Jusqu’a 10 stammtische',
                'Up to 50 members': 'Jusqu’a 50 membres',
                'Ad-free experience': 'Experience sans publicite',
                'Analytics dashboard': 'Tableau de bord analytique',
                'Custom branding/themes': 'Marque/themes personnalises',
                'Data export': 'Export des donnees',
                'Priority support': 'Assistance prioritaire',
                'Start Free Trial': 'Demarrer l’essai gratuit',
                '3-month free trial included': 'Essai gratuit de 3 mois inclus',
                'Get in Touch': 'Nous contacter',
                'Questions or feedback? Send us a message!': 'Questions ou commentaires ? Envoyez-nous un message.',
                'Send': 'Envoyer',
                'Submitting...': 'Envoi...',
                'Sent!': 'Envoye.',
                '✅ Thanks! We\'ll be in touch soon.': 'Merci. Nous vous recontacterons bientot.',
                '⚠️ Oops! Something went wrong. Please try again.': 'Oups, une erreur est survenue. Veuillez reessayer.',
                'Own a Restaurant or Bar?': 'Vous possedez un restaurant ou un bar ?',
                'Partner with Stammtisch to connect with groups looking for venues. Help attract customers during slower periods and build community connections.': 'Devenez partenaire de Stammtisch pour entrer en contact avec des groupes a la recherche de lieux. Attirez des clients pendant les periodes plus calmes et creez du lien local.',
                '🍺 Learn About Partner Program': 'Decouvrir le programme partenaire',
                'Terms of Service': 'Conditions d’utilisation',
                'Privacy Policy': 'Politique de confidentialite',
                'By using Stammtisch, you agree to our Terms of Service. Users attend gatherings at their own risk.': 'En utilisant Stammtisch, vous acceptez nos Conditions d’utilisation. Les utilisateurs participent aux rencontres a leurs propres risques.',
                'Home': 'Accueil',
                'For Venues': 'Pour les lieux',
                'Privacy': 'Confidentialite',
                '🍺 Partner Program': 'Programme partenaire',
                'Help Fill Empty Tables With Regular Customers': 'Aidez a remplir les tables vides avec des clients reguliers',
                'Join restaurants and bars hosting Stammtisch groups. Our platform can help you get more reservations, attract new customers during slower periods, and build a loyal community—all while getting free promotion in our app.': 'Rejoignez les restaurants et bars qui accueillent des groupes Stammtisch. Notre plateforme peut vous aider a obtenir plus de reservations, attirer de nouveaux clients pendant les periodes calmes et fideliser une communaute, avec une promotion gratuite dans l’app.',
                'Potential weekly visits per group*': 'Visites hebdomadaires potentielles par groupe*',
                'Typical people per gathering*': 'Participants typiques par rencontre*',
                'Free to join': 'Inscription gratuite',
                '*Results may vary. No guarantees of specific outcomes.': '*Les resultats peuvent varier. Aucun resultat specifique n’est garanti.',
                'Why Partner With Stammtisch?': 'Pourquoi devenir partenaire de Stammtisch ?',
                'More Predictable Bookings': 'Reservations plus previsibles',
                'Stammtisch groups typically meet bi-weekly, monthly, or quarterly, which may help you plan for recurring reservations.': 'Les groupes Stammtisch se reunissent souvent toutes les deux semaines, chaque mois ou chaque trimestre, ce qui peut aider a planifier des reservations recurrentes.',
                'Attract New Customers': 'Attirer de nouveaux clients',
                'Each group can bring 4-15 people who may not have visited before. Great experiences can turn first-time guests into regulars.': 'Chaque groupe peut amener 4 a 15 personnes qui ne vous connaissaient peut-etre pas. Une belle experience peut transformer de nouveaux venus en habitues.',
                'Free App Promotion': 'Promotion gratuite dans l’app',
                'Your venue can be featured in the Stammtisch app with photos, menu highlights, and directions—reaching local users at no cost.': 'Votre lieu peut etre presente dans l’app Stammtisch avec photos, points forts du menu et itineraire, sans frais.',
                'Target Slower Periods': 'Cibler les periodes calmes',
                'Many groups prefer Monday-Thursday evenings. This can help you attract customers during traditionally quieter times.': 'Beaucoup de groupes preferent les soirees du lundi au jeudi. Cela peut vous aider a attirer des clients pendant les moments habituellement plus calmes.',
                'Build Community': 'Construire une communaute',
                'Become a gathering spot for local communities. Groups that enjoy your venue may return regularly and recommend you to others.': 'Devenez un point de rencontre pour les communautes locales. Les groupes qui apprecient votre lieu peuvent revenir regulierement et vous recommander.',
                'No Commission Fees': 'Aucune commission',
                'Unlike delivery apps, we don\'t take a cut of your sales. You keep 100% of revenue from groups that visit.': 'Contrairement aux apps de livraison, nous ne prenons aucune part de vos ventes. Vous gardez 100% des revenus des groupes qui vous rendent visite.',
                'How It Works': 'Comment ca marche',
                'Submit Your Venue': 'Soumettez votre lieu',
                'Fill out the form below with your details and availability': 'Remplissez le formulaire avec vos informations et disponibilites',
                'Get Listed': 'Soyez reference',
                'We add your location to the app with photos and details': 'Nous ajoutons votre lieu dans l’app avec photos et details',
                'Welcome Groups': 'Accueillez les groupes',
                'Groups book directly through the app and visit regularly': 'Les groupes reservent via l’app et viennent regulierement',
                'Grow Together': 'Grandir ensemble',
                'Build relationships and watch your regulars multiply': 'Creez des relations et voyez vos habitues se multiplier',
                'Become a Partner Venue': 'Devenir lieu partenaire',
                'Submit your restaurant or bar to start hosting Stammtisch groups': 'Soumettez votre restaurant ou bar pour commencer a accueillir des groupes Stammtisch',
                'Restaurant/Bar Name': 'Nom du restaurant/bar',
                'Contact Person': 'Personne de contact',
                'Email': 'E-mail',
                'Phone Number': 'Telephone',
                'Website': 'Site web',
                'Full Address': 'Adresse complete',
                'Special Offer for First Groups': 'Offre speciale pour les premiers groupes',
                'Number of Groups for Special Offer': 'Nombre de groupes pour l’offre',
                'Preferred Days & Times': 'Jours et horaires preferes',
                'Monday Evening': 'Lundi soir',
                'Tuesday Evening': 'Mardi soir',
                'Wednesday Evening': 'Mercredi soir',
                'Thursday Evening': 'Jeudi soir',
                'Friday Evening': 'Vendredi soir',
                'Saturday Afternoon': 'Samedi apres-midi',
                'Saturday Evening': 'Samedi soir',
                'Sunday Afternoon': 'Dimanche apres-midi',
                'Additional Information': 'Informations supplementaires',
                'Submit Partnership Request': 'Envoyer la demande de partenariat',
                'Submitted Successfully!': 'Envoye avec succes.',
                '✅ Thank you! We\'ll review your submission and contact you within 2-3 business days.': 'Merci. Nous examinerons votre demande et vous contacterons sous 2 a 3 jours ouvrables.',
                '⚠️ Something went wrong. Please try again or email us directly.': 'Une erreur est survenue. Veuillez reessayer ou nous envoyer un e-mail directement.',
                'Results and outcomes may vary by venue. Stammtisch provides a platform to connect venues with groups but does not guarantee specific business results, customer volume, or revenue increases.': 'Les resultats peuvent varier selon le lieu. Stammtisch fournit une plateforme reliant les lieux aux groupes, mais ne garantit aucun resultat commercial, volume de clients ou hausse de revenus specifique.',
                '← Back to Home': '← Retour a l’accueil',
                'Back to Home': 'Retour a l’accueil',
                'Last Updated: March 2, 2026': 'Derniere mise a jour : 2 mars 2026',
                'Effective Date:': 'Date d’effet :',
                'Last Updated:': 'Derniere mise a jour :',
                'Introduction': 'Introduction',
                'Information We Collect': 'Informations que nous collectons',
                'How We Use Your Information': 'Comment nous utilisons vos informations',
                'Legal Basis for Processing (GDPR)': 'Base juridique du traitement (RGPD)',
                'Information Sharing and Disclosure': 'Partage et divulgation des informations',
                'Data Security': 'Securite des donnees',
                'Data Retention': 'Conservation des donnees',
                'Your Rights (GDPR & CCPA)': 'Vos droits (RGPD et CCPA)',
                'International Data Transfers': 'Transferts internationaux de donnees',
                'Children\'s Privacy': 'Confidentialite des enfants',
                'Cookies and Tracking': 'Cookies et suivi',
                'Third-Party Services': 'Services tiers',
                'California Privacy Rights (CCPA)': 'Droits de confidentialite en Californie (CCPA)',
                'Updates to This Policy': 'Mises a jour de cette politique',
                'Data Protection Officer': 'Delegue a la protection des donnees',
                'Contact Information': 'Coordonnees',
                'Definitions': 'Definitions',
                'Opening Stammtisch App...': 'Ouverture de l’app Stammtisch...',
                'Please wait while we redirect you to the app.': 'Veuillez patienter pendant la redirection vers l’app.',
                'Download Stammtisch': 'Telecharger Stammtisch',
                'To join this group, please download the Stammtisch app first.': 'Pour rejoindre ce groupe, telechargez d’abord l’app Stammtisch.',
                'Redirecting you now.': 'Redirection en cours.',
                'To join this group, please download the Stammtisch app.': 'Pour rejoindre ce groupe, telechargez l’app Stammtisch.',
                'Learn More': 'En savoir plus',
                'Download on App Store': 'Telecharger sur l’App Store',
                '🍻 Join Stammtisch': 'Rejoindre Stammtisch',
                'You\'ve been invited to join a group!': 'Vous avez ete invite a rejoindre un groupe.',
                'Open in App': 'Ouvrir dans l’app',
                'Don\'t have the app yet?': 'Vous n’avez pas encore l’app ?',
                'Download from App Store': 'Telecharger depuis l’App Store'
            },
            placeholders: {
                'Your name (optional)': 'Votre nom (facultatif)',
                'Your email': 'Votre e-mail',
                'Message (optional)': 'Message (facultatif)',
                'The Golden Pint': 'Le Pichet Dore',
                'John Smith': 'Jean Dupont',
                'john@goldenpint.com': 'jean@lieu.fr',
                '(555) 123-4567': '+33 1 23 45 67 89',
                'goldenpint.com': 'lieu.fr',
                '123 Main St, San Francisco, CA 94102': '1 rue Principale, 75001 Paris',
                'Example: 10% off first visit, free appetizer for groups of 10+, complimentary round of drinks, etc.': 'Exemple : 10% de reduction lors de la premiere visite, entree offerte pour les groupes de 10+, tournee de bienvenue, etc.',
                'e.g., 5': 'p. ex., 5',
                'Tell us about your venue, capacity for groups, any special features or amenities...': 'Parlez-nous de votre lieu, de sa capacite pour les groupes et de ses particularites ou services...'
            }
        }
    };

    const legalSummary = {
        de: 'Hinweis: Diese Seite wurde für die Website lokalisiert. Bei rechtlichen Auslegungsfragen ist die englische Fassung maßgeblich, sofern keine geprüfte Übersetzung veröffentlicht wurde.',
        es: 'Nota: Esta pagina se ha localizado para el sitio web. Para interpretaciones legales, la version en ingles prevalece salvo que se publique una traduccion revisada.',
        fr: 'Remarque : cette page a ete localisee pour le site web. Pour toute interpretation juridique, la version anglaise prevaut sauf publication d’une traduction revisee.'
    };

    const legalHighlights = {
        privacy: {
            de: {
                title: 'Kurzüberblick',
                items: [
                    'Wir erfassen Konto-, Profil-, Event-, Kommunikations-, Nutzungs- und Geräteinformationen, soweit sie für den Dienst erforderlich sind.',
                    'Wir nutzen Daten zur Bereitstellung, Verbesserung, Sicherheit und, mit Einwilligung, für Produktneuigkeiten.',
                    'Wir verkaufen keine personenbezogenen Daten und teilen Informationen nur mit Gruppenmitgliedern, Dienstleistern oder wenn es rechtlich erforderlich ist.',
                    'Sie können Auskunft, Berichtigung, Löschung, Portabilität, Einschränkung oder Widerspruch verlangen.'
                ]
            },
            es: {
                title: 'Resumen',
                items: [
                    'Recopilamos informacion de cuenta, perfil, eventos, comunicaciones, uso y dispositivo cuando es necesaria para prestar el servicio.',
                    'Usamos datos para prestar y mejorar el servicio, mantener la seguridad y, con consentimiento, enviar novedades del producto.',
                    'No vendemos datos personales y solo compartimos informacion con miembros del grupo, proveedores de servicio o cuando la ley lo exige.',
                    'Puedes solicitar acceso, rectificacion, eliminacion, portabilidad, limitacion u oposicion al tratamiento.'
                ]
            },
            fr: {
                title: 'Résumé',
                items: [
                    'Nous collectons les informations de compte, profil, evenement, communication, utilisation et appareil lorsqu’elles sont necessaires au service.',
                    'Nous utilisons les donnees pour fournir et ameliorer le service, assurer la securite et, avec consentement, envoyer des actualites produit.',
                    'Nous ne vendons pas les donnees personnelles et ne les partageons qu’avec les membres du groupe, les prestataires ou lorsque la loi l’exige.',
                    'Vous pouvez demander l’acces, la rectification, l’effacement, la portabilite, la limitation ou l’opposition au traitement.'
                ]
            }
        },
        terms: {
            de: {
                title: 'Kurzüberblick',
                items: [
                    'Mit der Nutzung von Stammtisch akzeptieren Sie diese Bedingungen und unsere Datenschutzerklärung.',
                    'Stammtisch hilft Gruppen beim Organisieren von Treffen, veranstaltet oder kontrolliert die Treffen selbst jedoch nicht.',
                    'Nutzer sind für rechtmäßige Nutzung, respektvolles Verhalten und sichere Kontodaten verantwortlich.',
                    'Lokale und Treffen erfolgen auf eigene Verantwortung; Stammtisch garantiert keine bestimmten Ergebnisse.'
                ]
            },
            es: {
                title: 'Resumen',
                items: [
                    'Al usar Stammtisch, aceptas estos terminos y nuestra politica de privacidad.',
                    'Stammtisch ayuda a los grupos a organizar reuniones, pero no organiza ni controla las reuniones reales.',
                    'Los usuarios son responsables de usar el servicio legalmente, comportarse con respeto y proteger sus credenciales.',
                    'Los locales y reuniones se visitan bajo responsabilidad propia; Stammtisch no garantiza resultados especificos.'
                ]
            },
            fr: {
                title: 'Résumé',
                items: [
                    'En utilisant Stammtisch, vous acceptez ces conditions et notre politique de confidentialite.',
                    'Stammtisch aide les groupes a organiser des rencontres, mais n’organise ni ne controle les rencontres elles-memes.',
                    'Les utilisateurs sont responsables d’une utilisation conforme a la loi, d’un comportement respectueux et de la securite de leur compte.',
                    'Les lieux et rencontres sont frequentes a vos propres risques ; Stammtisch ne garantit aucun resultat specifique.'
                ]
            }
        }
    };

    function getPageKey() {
        const path = window.location.pathname;
        if (path.includes('locations')) return 'locations';
        if (path.includes('privacy')) return 'privacy';
        if (path.includes('terms')) return 'terms';
        if (path.includes('join')) return 'join';
        return 'home';
    }

    function normalizeLanguage(value) {
        if (!value) return null;
        const base = value.toLowerCase().split('-')[0];
        return supportedLanguages.includes(base) ? base : null;
    }

    function languageFromPath() {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        if (window.location.protocol === 'file:') {
            return pathSegments.map(normalizeLanguage).find(Boolean) || null;
        }
        return normalizeLanguage(pathSegments[0]);
    }

    function detectLanguage() {
        const params = new URLSearchParams(window.location.search);
        const fromQuery = normalizeLanguage(params.get('lang'));
        if (fromQuery) return fromQuery;

        const fromPath = languageFromPath();
        if (fromPath) return fromPath;

        const saved = normalizeLanguage(localStorage.getItem('stammtisch_language'));
        if (saved) return saved;

        const browserLanguages = navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language];
        for (const language of browserLanguages) {
            const normalized = normalizeLanguage(language);
            if (normalized) return normalized;
        }
        return 'en';
    }

    function createSwitcher(currentLanguage) {
        if (document.querySelector('.language-switcher')) return;

        const style = document.createElement('style');
        style.textContent = `
            .language-switcher {
                position: fixed;
                top: 18px;
                right: 18px;
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 9px 12px;
                border: 1px solid rgba(255, 255, 255, 0.42);
                border-radius: 999px;
                background: rgba(37, 34, 89, 0.42);
                color: white;
                backdrop-filter: blur(16px);
                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
            }
            .language-switcher label {
                margin: 0;
                font-size: 0.78rem;
                font-weight: 700;
                letter-spacing: 0;
                line-height: 1;
                text-transform: uppercase;
                opacity: 0.9;
            }
            .language-switcher select {
                width: auto;
                min-width: 118px;
                padding: 8px 30px 8px 12px;
                border: 1px solid rgba(255, 255, 255, 0.35);
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.96);
                color: #3f358f;
                font: inherit;
                font-weight: 700;
                cursor: pointer;
            }
            .language-switcher select:focus {
                outline: 2px solid rgba(255, 255, 255, 0.9);
                outline-offset: 2px;
            }
            @media (max-width: 520px) {
                .language-switcher {
                    top: 8px;
                    right: 8px;
                    padding: 6px 7px;
                }
                .language-switcher label {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                }
                .language-switcher select {
                    min-width: 92px;
                    font-size: 0.9rem;
                }
            }
        `;
        document.head.appendChild(style);

        const wrapper = document.createElement('div');
        wrapper.className = 'language-switcher';

        const label = document.createElement('label');
        label.setAttribute('for', 'languageSelect');
        label.textContent = 'Language';

        const select = document.createElement('select');
        select.id = 'languageSelect';
        select.setAttribute('aria-label', 'Language');
        supportedLanguages.forEach((language) => {
            const option = document.createElement('option');
            option.value = language;
            option.textContent = `${language.toUpperCase()} · ${languageNames[language]}`;
            select.appendChild(option);
        });
        select.value = currentLanguage;
        select.addEventListener('change', () => {
            localStorage.setItem('stammtisch_language', select.value);
            if (!updateLanguageUrl(select.value)) {
                applyLanguage(select.value);
            }
        });

        wrapper.append(label, select);
        document.body.appendChild(wrapper);
    }

    let activeLanguage = 'en';
    let observer;

    function translatedText(language, text) {
        if (language === 'en') return text;
        const translations = pageText[language].strings || {};
        if (translations[text]) return translations[text];

        const numberedHeading = text.match(/^(\d+(?:\.\d+)?\.?\s+)(.+)$/);
        if (numberedHeading && translations[numberedHeading[2]]) {
            return numberedHeading[1] + translations[numberedHeading[2]];
        }

        return null;
    }

    function translateTextNodes(language) {
        const translations = pageText[language].strings || {};
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach((node) => {
            const original = node.__i18nOriginalText || node.nodeValue;
            node.__i18nOriginalText = original;
            const trimmed = original.trim();
            if (!trimmed) return;
            const translated = translatedText(language, trimmed);
            if (!translated) {
                node.nodeValue = original;
                return;
            }
            node.nodeValue = original.replace(trimmed, translated);
        });
    }

    function translateAttributes(language) {
        const translations = pageText[language].placeholders || {};
        document.querySelectorAll('[placeholder]').forEach((element) => {
            const original = element.dataset.i18nPlaceholder || element.getAttribute('placeholder');
            element.dataset.i18nPlaceholder = original;
            element.setAttribute('placeholder', language === 'en' ? original : translations[original] || original);
        });

        document.querySelectorAll('img[alt]').forEach((element) => {
            const original = element.dataset.i18nAlt || element.getAttribute('alt');
            element.dataset.i18nAlt = original;
            const altTranslation = pageText[language].strings[original];
            element.setAttribute('alt', language === 'en' ? original : altTranslation || original);
        });
    }

    function translateMetadata(language) {
        const page = getPageKey();
        const languageData = pageText[language];
        const fallbackData = pageText.en;
        const title = languageData.title[page] || fallbackData.title[page] || document.title;
        const descriptionText = languageData.metaDescription[page] || fallbackData.metaDescription[page] || '';
        document.documentElement.lang = language;
        document.title = title;

        const description = document.querySelector('meta[name="description"]');
        if (description && descriptionText) {
            description.setAttribute('content', descriptionText);
        }

        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', descriptionText);
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', descriptionText);
    }

    function setMeta(attribute, key, value) {
        if (!value) return;
        const element = document.querySelector(`meta[${attribute}="${key}"]`);
        if (element) element.setAttribute('content', value);
    }

    function updateLanguageUrl(language) {
        if (!window.history || !window.history.replaceState) return;
        if (getPageKey() === 'home') {
            const target = homepageUrl(language);
            if (window.location.href !== target) {
                window.location.assign(target);
                return true;
            }
            return false;
        }

        const url = new URL(window.location.href);
        url.searchParams.set('lang', language);
        window.history.replaceState({}, '', url.toString());
        return false;
    }

    function homepageUrl(language) {
        if (window.location.protocol === 'file:') {
            const currentPath = window.location.pathname;
            const isLocalizedFile = /\/(?:de|es|fr)\/index\.html$/i.test(currentPath);
            const base = isLocalizedFile ? new URL('../', window.location.href) : new URL('./', window.location.href);
            return new URL(language === 'en' ? 'index.htm' : `${language}/index.html`, base).href;
        }

        return new URL(language === 'en' ? '/' : `/${language}/`, window.location.origin).href;
    }

    function addLegalNotice(language) {
        document.querySelectorAll('.i18n-legal-notice').forEach((notice) => notice.remove());
        if (language === 'en' || !legalSummary[language]) return;
        if (!['privacy', 'terms'].includes(getPageKey())) return;

        const container = document.querySelector('.container');
        if (!container) return;

        const notice = document.createElement('p');
        notice.className = 'i18n-legal-notice';
        notice.textContent = legalSummary[language];
        notice.style.cssText = 'background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 12px; padding: 16px; margin: 0 0 24px; font-size: 0.95rem;';

        const firstHeading = container.querySelector('h1');
        if (firstHeading && firstHeading.nextSibling) {
            firstHeading.parentNode.insertBefore(notice, firstHeading.nextSibling);
        } else {
            container.prepend(notice);
        }
    }

    function addLegalHighlights(language) {
        document.querySelectorAll('.i18n-legal-highlights').forEach((element) => element.remove());
        if (language === 'en') return;

        const page = getPageKey();
        const highlights = legalHighlights[page] && legalHighlights[page][language];
        if (!highlights) return;

        const container = document.querySelector('.container');
        if (!container) return;

        const panel = document.createElement('section');
        panel.className = 'i18n-legal-highlights';
        panel.style.cssText = 'background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); border-radius: 12px; padding: 20px 22px; margin: 0 0 28px;';

        const heading = document.createElement('h2');
        heading.textContent = highlights.title;
        heading.style.cssText = 'font-size: 1.35rem; margin: 0 0 12px;';
        panel.appendChild(heading);

        const list = document.createElement('ul');
        list.style.cssText = 'margin: 0; padding-left: 22px;';
        highlights.items.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        panel.appendChild(list);

        const notice = container.querySelector('.i18n-legal-notice');
        if (notice && notice.nextSibling) {
            notice.parentNode.insertBefore(panel, notice.nextSibling);
        } else {
            const firstHeading = container.querySelector('h1');
            if (firstHeading && firstHeading.nextSibling) {
                firstHeading.parentNode.insertBefore(panel, firstHeading.nextSibling);
            } else {
                container.prepend(panel);
            }
        }
    }

    function applyLanguage(language) {
        const normalizedLanguage = normalizeLanguage(language) || 'en';
        activeLanguage = normalizedLanguage;
        if (observer) observer.disconnect();
        createSwitcher(normalizedLanguage);
        const select = document.getElementById('languageSelect');
        if (select) select.value = normalizedLanguage;
        translateMetadata(normalizedLanguage);
        translateTextNodes(normalizedLanguage);
        translateAttributes(normalizedLanguage);
        addLegalNotice(normalizedLanguage);
        addLegalHighlights(normalizedLanguage);
        observeChanges();
    }

    function observeChanges() {
        if (observer) observer.disconnect();
        observer = new MutationObserver(() => {
            observer.disconnect();
            translateTextNodes(activeLanguage);
            translateAttributes(activeLanguage);
            observer.observe(document.body, { childList: true, characterData: true, subtree: true });
        });
        observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const language = detectLanguage();
        localStorage.setItem('stammtisch_language', language);
        applyLanguage(language);
    });

    window.StammtischI18n = {
        applyLanguage,
        getLanguage: detectLanguage
    };
})();
