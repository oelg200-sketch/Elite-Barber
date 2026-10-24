/* ================================================================
   Elite Barber — JavaScript (no frameworks, no libraries)
   Carousels, modals, multi-step booking, animations
   ================================================================ */

(function () {
  'use strict';

  /* ---------- DATA ---------- */
  var services = [
    {
      id: 1, name: 'Corte Clásico', price: 8.00, time: '30 min', emoji: '✂️',
      desc: 'Corte de cabello tradicional con tijera y máquina, adaptado a tu estilo preferido. Incluye lavado y peinado.',
      image: 'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      details: { Incluye: 'Lavado y peinado', Herramientas: 'Tijera y máquina', Tipo: 'Tradicional' }
    },
    {
      id: 2, name: 'Corte Fade', price: 10.00, time: '40 min', emoji: '💈',
      desc: 'Corte degradado profesional con transiciones suaves. El estilo más popular entre nuestros clientes.',
      image: 'https://images.pexels.com/photos/12074386/pexels-photo-12074386.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      details: { Incluye: 'Diseño de línea', Herramientas: 'Máquina de precisión', Tipo: 'Moderno' }
    },
    {
      id: 3, name: 'Diseño de Barba', price: 6.00, time: '25 min', emoji: '🧔',
      desc: 'Perfilado y diseño de barba con navaja. Moldeamos tu barba para que luzca perfecta.',
      image: 'https://images.pexels.com/photos/12706272/pexels-photo-12706272.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      details: { Incluye: 'Toalla caliente y aceites', Herramientas: 'Navaja y tijera', Tipo: 'Premium' }
    },
    {
      id: 4, name: 'Corte + Barba', price: 13.00, time: '55 min', emoji: '🎭',
      desc: 'Paquete completo: corte de cabello y diseño de barba. La opción más solicitada.',
      image: 'https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      details: { Incluye: 'Lavado, peinado y perfilado', Herramientas: 'Completo', Tipo: 'Combo' }
    },
    {
      id: 5, name: 'Corte de Niño', price: 6.00, time: '25 min', emoji: '🧒',
      desc: 'Corte de cabello para niños (hasta 12 años). Un ambiente amigable y paciente.',
      image: 'https://images.pexels.com/photos/3356174/pexels-photo-3356174.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      details: { Incluye: 'Peinado', Herramientas: 'Tijera y máquina', Tipo: 'Infantil' }
    },
    {
      id: 6, name: 'Tratamiento Facial', price: 12.00, time: '40 min', emoji: '✨',
      desc: 'Limpieza facial profunda, mascarilla y tratamiento hidratante. Recupera la frescura de tu piel.',
      image: 'https://images.pexels.com/photos/7697712/pexels-photo-7697712.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      details: { Incluye: 'Limpieza, mascarilla e hidratación', Herramientas: 'Productos premium', Tipo: 'Spa' }
    },
  ];

  var barbers = [
    {
      id: 1, name: 'Carlos Méndez', role: 'Barbero Senior', specialties: ['Fade', 'Diseño', 'Barba'],
      exp: '10 años', cuts: 3000,
      desc: 'Especialista en cortes fade y diseño de barba. Con más de 10 años de experiencia, Carlos es conocido por su precisión milimétrica y atención al detalle.',
      image: 'https://images.pexels.com/photos/13138585/pexels-photo-13138585.jpeg?auto=compress&cs=tinysrgb&h=500&w=400',
      rating: '4.9'
    },
    {
      id: 2, name: 'Roberto Silva', role: 'Barbero Clásico', specialties: ['Clásico', 'Tijera', 'Niños'],
      exp: '8 años', cuts: 2000,
      desc: 'Maestro de los cortes clásicos con tijera. Roberto tiene un talento natural para encontrar el estilo perfecto para cada cliente.',
      image: 'https://images.pexels.com/photos/7697225/pexels-photo-7697225.jpeg?auto=compress&cs=tinysrgb&h=500&w=400',
      rating: '4.8'
    },
    {
      id: 3, name: 'Diego Torres', role: 'Barbero Creativo', specialties: ['Diseños', 'Líneas', 'Texturas'],
      exp: '6 años', cuts: 1500,
      desc: 'El artista del equipo. Diego crea diseños únicos y personalizados con líneas y texturas que destacan tu personalidad.',
      image: 'https://images.pexels.com/photos/12464843/pexels-photo-12464843.jpeg?auto=compress&cs=tinysrgb&h=500&w=400',
      rating: '5.0'
    },
  ];

  var galleryItems = [
    { img: 'https://images.pexels.com/photos/12074386/pexels-photo-12074386.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Fade', title: 'Fade Clásico' },
    { img: 'https://images.pexels.com/photos/12706272/pexels-photo-12706272.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Barba', title: 'Diseño de Barba' },
    { img: 'https://images.pexels.com/photos/18503633/pexels-photo-18503633.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Corte', title: 'Corte con Máquina' },
    { img: 'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Tijera', title: 'Estilo con Tijera' },
    { img: 'https://images.pexels.com/photos/14781974/pexels-photo-14781974.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Moderno', title: 'Corte Moderno' },
    { img: 'https://images.pexels.com/photos/12464837/pexels-photo-12464837.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Navaja', title: 'Acabado con Navaja' },
    { img: 'https://images.pexels.com/photos/34702982/pexels-photo-34702982.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Fade', title: 'Fade Disfrazado' },
    { img: 'https://images.pexels.com/photos/7697225/pexels-photo-7697225.jpeg?auto=compress&cs=tinysrgb&h=500&w=600', tag: 'Lateral', title: 'Corte Lateral' },
  ];

  var reviews = [
    { name: 'Andrés M.', initials: 'AM', stars: 5, text: 'El mejor corte de mi vida. Carlos entendió exactamente lo que quería. Ambiente profesional y relajado.', meta: 'Cliente desde 2023' },
    { name: 'Luis R.', initials: 'LR', stars: 5, text: 'Siempre salgo satisfecho. Los barberos son verdaderos artistas. El servicio de barba con toalla caliente es increíble.', meta: 'Cliente frecuente' },
    { name: 'Fernando G.', initials: 'FG', stars: 5, text: 'Mi hijo de 8 años no le gustaba cortarse el pelo hasta que fuimos a Elite. Ahora pide ir. ¡Súper recomendado!', meta: 'Cliente nuevo' },
    { name: 'Javier P.', initials: 'JP', stars: 5, text: 'Diego me hizo un diseño que nadie más había podido lograr. Pura creatividad y talento. Volveré seguro.', meta: 'Cliente verificado' },
    { name: 'Miguel A.', initials: 'MA', stars: 5, text: 'Lugar limpio, profesional y con buena música. Reservé online y todo fue rapidísimo. Puntuales y precisos.', meta: 'Cliente frecuente' },
    { name: 'Sergio D.', initials: 'SD', stars: 5, text: 'El corte fade de Roberto es perfecto. Simetría impecable. No voy a ningún otro lado ahora.', meta: 'Cliente desde 2022' },
  ];

  var products = [
    {
      id: 1, name: 'Shampoo Premium', category: 'cabello', price: 12.00, oldPrice: 15.00, badge: 'Oferta',
      desc: 'Shampoo profesional con queratina y argán. Limpia en profundidad sin resecar el cabello.',
      image: 'https://images.pexels.com/photos/18066458/pexels-photo-18066458.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Tamaño: '300ml', Tipo: 'Todos los cabellos', Uso: 'Diario' }
    },
    {
      id: 2, name: 'Aceite para Barba', category: 'barba', price: 14.00, badge: 'Top',
      desc: 'Aceite hidratante con aceites esenciales de argán y jojoba. Suaviza y nutre la barba.',
      image: 'https://images.pexels.com/photos/14656188/pexels-photo-14656188.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Tamaño: '50ml', Tipo: 'Todas las barbas', Aroma: 'Madera y cítricos' }
    },
    {
      id: 3, name: 'Cera para Cabello', category: 'cabello', price: 10.00,
      desc: 'Cera de fijación media con acabado mate. Moldea tu estilo sin grasa ni residuos.',
      image: 'https://images.pexels.com/photos/19833253/pexels-photo-19833253.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Tamaño: '100g', Fijación: 'Media', Acabado: 'Mate' }
    },
    {
      id: 4, name: 'Bálsamo para Barba', category: 'barba', price: 11.00,
      desc: 'Bálsamo acondicionador que hidrata, controla el frizz y da forma a tu barba todo el día.',
      image: 'https://images.pexels.com/photos/39281916/pexels-photo-39281916.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Tamaño: '60g', Fijación: 'Ligera', Aroma: 'Vainilla' }
    },
    {
      id: 5, name: 'Acondicionador Pro', category: 'cabello', price: 13.00,
      desc: 'Acondicionador con proteínas de seda. Desenreda, suaviza y aporta brillo natural.',
      image: 'https://images.pexels.com/photos/33525723/pexels-photo-33525723.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Tamaño: '300ml', Tipo: 'Todos los cabellos', Uso: 'Diario' }
    },
    {
      id: 6, name: 'Suero Capilar', category: 'cabello', price: 18.00, badge: 'Nuevo',
      desc: 'Suero reparador con vitamina E y biotina. Fortalece y reduce la caída del cabello.',
      image: 'https://images.pexels.com/photos/14656279/pexels-photo-14656279.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Tamaño: '30ml', Tipo: 'Tratamiento', Uso: '2-3 veces por semana' }
    },
    {
      id: 7, name: 'Peine Profesional', category: 'accesorios', price: 7.00,
      desc: 'Peine de acero inoxidable con dientes finos. Ideal para líneas precisas y acabados.',
      image: 'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Material: 'Acero inoxidable', Tipo: 'Dientes finos', Uso: 'Profesional' }
    },
    {
      id: 8, name: 'Set de Barbería', category: 'accesorios', price: 25.00, oldPrice: 32.00, badge: 'Oferta',
      desc: 'Set completo: peine, cepillo para barba, tijera y navaja. Todo lo que necesitas en casa.',
      image: 'https://images.pexels.com/photos/10517483/pexels-photo-10517483.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
      details: { Incluye: 'Peine, cepillo, tijera, navaja', Material: 'Acero y madera', Nivel: 'Profesional' }
    },
  ];

  /* ---------- STATE ---------- */
  var selectedService = null;
  var selectedBarber = null;
  var currentReviewPage = 0;

  /* ---------- DOM helpers ---------- */
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }
  function fmtPrice(val) { return '$' + Number(val).toFixed(2); }

  /* ================================================================
     NAVBAR
     ================================================================ */
  var navbar = $('#navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  /* ---------- Mobile menu ---------- */
  var menuToggle = $('#menuToggle');
  var navLinks = $('#navLinks');
  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    });
  });

  /* ================================================================
     HERO FLOATING ITEMS
     ================================================================ */
  var heroScissors = $('#heroScissors');
  var floatItems = ['✂️', '💈', '🪒', '🧔', '✂️', '💈', '🪒', '🧔'];
  floatItems.forEach(function (item) {
    var el = document.createElement('span');
    el.className = 'float-item';
    el.textContent = item;
    el.style.left = (5 + Math.random() * 90) + '%';
    el.style.top = (10 + Math.random() * 80) + '%';
    el.style.fontSize = (28 + Math.random() * 24) + 'px';
    el.style.animationDuration = (3 + Math.random() * 3) + 's';
    el.style.animationDelay = (Math.random() * 2) + 's';
    heroScissors.appendChild(el);
  });

  /* ---------- Hero counter animation ---------- */
  var countersTriggered = false;
  function animateCounters() {
    if (countersTriggered) return;
    countersTriggered = true;
    $$('.stat-num').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var current = 0;
      var step = Math.max(1, Math.ceil(target / 50));
      var interval = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = current + suffix;
      }, 30);
    });
  }
  setTimeout(animateCounters, 800);

  /* ================================================================
     SERVICES CAROUSEL
     ================================================================ */
  var servicesTrack = $('#servicesTrack');
  var servicesPrev = $('#servicesPrev');
  var servicesNext = $('#servicesNext');
  var servicesDots = $('#servicesDots');

  servicesTrack.innerHTML = services.map(function (s) {
    return ''
      + '<div class="service-card" data-service-id="' + s.id + '">'
      +   '<div class="service-card-img">'
      +     '<span class="service-card-emoji">' + s.emoji + '</span>'
      +     '<img src="' + s.image + '" alt="' + s.name + '" loading="lazy" />'
      +   '</div>'
      +   '<div class="service-card-body">'
      +     '<h3 class="service-card-name">' + s.name + '</h3>'
      +     '<p class="service-card-desc">' + s.desc + '</p>'
      +     '<div class="service-card-footer">'
      +       '<span class="service-card-price">' + fmtPrice(s.price) + '</span>'
      +       '<span class="service-card-time">'
      +         '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
      +         s.time
      +       '</span>'
      +     '</div>'
      +   '</div>'
      + '</div>';
  }).join('');

  // Click to open modal
  servicesTrack.querySelectorAll('[data-service-id]').forEach(function (card) {
    card.addEventListener('click', function () {
      var id = parseInt(card.getAttribute('data-service-id'), 10);
      var s = services.find(function (x) { return x.id === id; });
      openServiceModal(s);
    });
  });

  // Carousel nav
  function getScrollAmount(track) {
    var card = track.querySelector('.service-card, .gallery-item');
    if (!card) return 300;
    var style = window.getComputedStyle(track);
    var gap = parseInt(style.gap) || 20;
    return card.offsetWidth + gap;
  }

  servicesPrev.addEventListener('click', function () {
    servicesTrack.scrollBy({ left: -getScrollAmount(servicesTrack), behavior: 'smooth' });
  });
  servicesNext.addEventListener('click', function () {
    servicesTrack.scrollBy({ left: getScrollAmount(servicesTrack), behavior: 'smooth' });
  });

  // Dots
  function buildDots(track, dotsContainer) {
    var cards = track.children;
    var perView = Math.max(1, Math.round(track.offsetWidth / getScrollAmount(track)));
    var pageCount = Math.ceil(cards.length / perView);
    dotsContainer.innerHTML = '';
    for (var i = 0; i < pageCount; i++) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('data-page', i);
      dot.addEventListener('click', function () {
        var page = parseInt(this.getAttribute('data-page'), 10);
        track.scrollTo({ left: page * track.offsetWidth, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots(track, dotsContainer) {
    var cards = track.children;
    var perView = Math.max(1, Math.round(track.offsetWidth / getScrollAmount(track)));
    var page = Math.round(track.scrollLeft / track.offsetWidth);
    var dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === page);
    });
  }

  buildDots(servicesTrack, servicesDots);
  servicesTrack.addEventListener('scroll', function () { updateDots(servicesTrack, servicesDots); }, { passive: true });

  /* ================================================================
     GALLERY CAROUSEL
     ================================================================ */
  var galleryTrack = $('#galleryTrack');
  var galleryPrev = $('#galleryPrev');
  var galleryNext = $('#galleryNext');
  var galleryDots = $('#galleryDots');

  galleryTrack.innerHTML = galleryItems.map(function (g) {
    return ''
      + '<div class="gallery-item">'
      +   '<img src="' + g.img + '" alt="' + g.title + '" loading="lazy" />'
      +   '<div class="gallery-item-overlay">'
      +     '<span>' + g.tag + '</span>'
      +     '<p>' + g.title + '</p>'
      +   '</div>'
      + '</div>';
  }).join('');

  galleryPrev.addEventListener('click', function () {
    galleryTrack.scrollBy({ left: -getScrollAmount(galleryTrack), behavior: 'smooth' });
  });
  galleryNext.addEventListener('click', function () {
    galleryTrack.scrollBy({ left: getScrollAmount(galleryTrack), behavior: 'smooth' });
  });

  buildDots(galleryTrack, galleryDots);
  galleryTrack.addEventListener('scroll', function () { updateDots(galleryTrack, galleryDots); }, { passive: true });

  /* ================================================================
     BARBERS
     ================================================================ */
  var barbersGrid = $('#barbersGrid');

  barbersGrid.innerHTML = barbers.map(function (b) {
    var tags = b.specialties.map(function (s) {
      return '<span class="barber-specialty-tag">' + s + '</span>';
    }).join('');
    return ''
      + '<div class="barber-card" data-barber-id="' + b.id + '">'
      +   '<div class="barber-card-img"><img src="' + b.image + '" alt="' + b.name + '" loading="lazy" /></div>'
      +   '<div class="barber-card-body">'
      +     '<h3 class="barber-card-name">' + b.name + '</h3>'
      +     '<p class="barber-card-role">' + b.role + '</p>'
      +     '<div class="barber-card-specialties">' + tags + '</div>'
      +     '<span class="barber-card-cta">Ver perfil '
      +       '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'
      +       '</svg>'
      +     '</span>'
      +   '</div>'
      + '</div>';
  }).join('');

  barbersGrid.querySelectorAll('[data-barber-id]').forEach(function (card) {
    card.addEventListener('click', function () {
      var id = parseInt(card.getAttribute('data-barber-id'), 10);
      var b = barbers.find(function (x) { return x.id === id; });
      openBarberModal(b);
    });
  });

  /* ================================================================
     MODAL
     ================================================================ */
  var modalOverlay = $('#modalOverlay');
  var modalContent = $('#modalContent');
  var modalClose = $('#modalClose');

  function openServiceModal(s) {
    var detailRows = '';
    Object.keys(s.details).forEach(function (key) {
      detailRows += ''
        + '<div class="modal-detail-row">'
        +   '<span class="modal-detail-label">' + key + '</span>'
        +   '<span class="modal-detail-value">' + s.details[key] + '</span>'
        + '</div>';
    });

    modalContent.innerHTML = ''
      + '<img class="modal-img" src="' + s.image + '" alt="' + s.name + '" />'
      + '<div class="modal-body">'
      +   '<h2 class="modal-title">' + s.name + '</h2>'
      +   '<p class="modal-subtitle">' + s.time + ' • ' + fmtPrice(s.price) + '</p>'
      +   '<p class="modal-desc">' + s.desc + '</p>'
      +   '<div class="modal-details">' + detailRows + '</div>'
      +   '<div class="modal-detail-row">'
      +     '<span class="modal-detail-label">Precio</span>'
      +     '<span class="modal-detail-value gold">' + fmtPrice(s.price) + '</span>'
      +   '</div>'
      +   '<a href="#reserva" class="btn-primary modal-cta" data-service="' + s.id + '">Reservar este servicio</a>'
      + '</div>';

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    var cta = modalContent.querySelector('.modal-cta');
    if (cta) {
      cta.addEventListener('click', function () {
        var sid = parseInt(cta.getAttribute('data-service'), 10);
        closeModal();
        preSelectService(sid);
      });
    }
  }

  function openBarberModal(b) {
    var tags = b.specialties.map(function (s) {
      return '<span class="modal-tag">' + s + '</span>';
    }).join('');

    modalContent.innerHTML = ''
      + '<img class="modal-img" src="' + b.image + '" alt="' + b.name + '" />'
      + '<div class="modal-body">'
      +   '<h2 class="modal-title">' + b.name + '</h2>'
      +   '<p class="modal-subtitle">' + b.role + ' • ★ ' + b.rating + '</p>'
      +   '<p class="modal-desc">' + b.desc + '</p>'
      +   '<div class="modal-tags">' + tags + '</div>'
      +   '<div class="modal-details">'
      +     '<div class="modal-detail-row"><span class="modal-detail-label">Experiencia</span><span class="modal-detail-value">' + b.exp + '</span></div>'
      +     '<div class="modal-detail-row"><span class="modal-detail-label">Cortes realizados</span><span class="modal-detail-value">' + b.cuts.toLocaleString() + '</span></div>'
      +     '<div class="modal-detail-row"><span class="modal-detail-label">Calificación</span><span class="modal-detail-value gold">★ ' + b.rating + '</span></div>'
      +   '</div>'
      +   '<a href="#reserva" class="btn-primary modal-cta" data-barber="' + b.id + '">Reservar con ' + b.name.split(' ')[0] + '</a>'
      + '</div>';

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    var cta = modalContent.querySelector('.modal-cta');
    if (cta) {
      cta.addEventListener('click', function () {
        var bid = parseInt(cta.getAttribute('data-barber'), 10);
        closeModal();
        preSelectBarber(bid);
      });
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });

  /* ================================================================
     REVIEWS CAROUSEL (transform-based)
     ================================================================ */
  var reviewsViewport = $('#reviewsViewport');
  var reviewsPrev = $('#reviewsPrev');
  var reviewsNext = $('#reviewsNext');
  var reviewsDots = $('#reviewsDots');

  var reviewsTrack = document.createElement('div');
  reviewsTrack.className = 'reviews-track';
  reviewsViewport.appendChild(reviewsTrack);

  reviewsTrack.innerHTML = reviews.map(function (r) {
    var stars = '';
    for (var i = 0; i < r.stars; i++) stars += '★';
    return ''
      + '<div class="review-card">'
      +   '<div class="review-stars">' + stars + '</div>'
      +   '<p class="review-text">"' + r.text + '"</p>'
      +   '<div class="review-author">'
      +     '<div class="review-avatar">' + r.initials + '</div>'
      +     '<div>'
      +       '<p class="review-name">' + r.name + '</p>'
      +       '<p class="review-meta">' + r.meta + '</p>'
      +     '</div>'
      +   '</div>'
      + '</div>';
  }).join('');

  function getReviewsPerPage() {
    var w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  }

  function renderReviewDots() {
    var perPage = getReviewsPerPage();
    var pages = Math.ceil(reviews.length / perPage);
    reviewsDots.innerHTML = '';
    for (var i = 0; i < pages; i++) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === currentReviewPage ? ' active' : '');
      dot.setAttribute('data-page', i);
      dot.addEventListener('click', function () {
        currentReviewPage = parseInt(this.getAttribute('data-page'), 10);
        updateReviewsPosition();
      });
      reviewsDots.appendChild(dot);
    }
  }

  function updateReviewsPosition() {
    var perPage = getReviewsPerPage();
    var maxPage = Math.ceil(reviews.length / perPage) - 1;
    if (currentReviewPage > maxPage) currentReviewPage = maxPage;
    if (currentReviewPage < 0) currentReviewPage = 0;
    var card = reviewsTrack.querySelector('.review-card');
    var cardWidth = card ? card.offsetWidth : 300;
    var gap = 20;
    var offset = currentReviewPage * (cardWidth + gap) * perPage;
    reviewsTrack.style.transform = 'translateX(-' + offset + 'px)';
    renderReviewDots();
  }

  reviewsPrev.addEventListener('click', function () {
    currentReviewPage--;
    updateReviewsPosition();
  });
  reviewsNext.addEventListener('click', function () {
    currentReviewPage++;
    updateReviewsPosition();
  });

  renderReviewDots();
  window.addEventListener('resize', function () {
    updateReviewsPosition();
    buildDots(servicesTrack, servicesDots);
    buildDots(galleryTrack, galleryDots);
  });

  /* ================================================================
     BOOKING — MULTI-STEP FORM
     ================================================================ */
  var serviceOptions = $('#serviceOptions');
  var barberOptions = $('#barberOptions');
  var step1 = $('#step1');
  var step2 = $('#step2');
  var step3 = $('#step3');
  var toStep2 = $('#toStep2');
  var toStep3 = $('#toStep3');
  var backTo1 = $('#backTo1');
  var backTo2 = $('#backTo2');
  var bookingSummary = $('#bookingSummary');
  var bookingForm = $('#bookingForm');
  var bookingSuccess = $('#bookingSuccess');
  var successMsg = $('#successMsg');
  var newBookingBtn = $('#newBooking');

  // Render service options
  serviceOptions.innerHTML = services.map(function (s) {
    return ''
      + '<div class="booking-option" data-option-service="' + s.id + '">'
      +   '<span class="booking-option-emoji">' + s.emoji + '</span>'
      +   '<div class="booking-option-info">'
      +     '<p class="booking-option-name">' + s.name + '</p>'
      +     '<p class="booking-option-price">' + fmtPrice(s.price) + ' • ' + s.time + '</p>'
      +   '</div>'
      + '</div>';
  }).join('');

  serviceOptions.querySelectorAll('[data-option-service]').forEach(function (opt) {
    opt.addEventListener('click', function () {
      serviceOptions.querySelectorAll('.booking-option').forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
      selectedService = services.find(function (s) { return s.id === parseInt(opt.getAttribute('data-option-service'), 10); });
      toStep2.disabled = false;
    });
  });

  // Render barber options
  barberOptions.innerHTML = barbers.map(function (b) {
    return ''
      + '<div class="booking-option" data-option-barber="' + b.id + '">'
      +   '<span class="booking-option-emoji">💈</span>'
      +   '<div class="booking-option-info">'
      +     '<p class="booking-option-name">' + b.name + '</p>'
      +     '<p class="booking-option-price">' + b.role + '</p>'
      +   '</div>'
      + '</div>';
  }).join('');

  barberOptions.querySelectorAll('[data-option-barber]').forEach(function (opt) {
    opt.addEventListener('click', function () {
      barberOptions.querySelectorAll('.booking-option').forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
      selectedBarber = barbers.find(function (b) { return b.id === parseInt(opt.getAttribute('data-option-barber'), 10); });
      toStep3.disabled = false;
    });
  });

  // Step navigation
  function goToStep(num) {
    [step1, step2, step3].forEach(function (s) { s.classList.remove('active'); });
    var stepEl = num === 1 ? step1 : num === 2 ? step2 : step3;
    stepEl.classList.add('active');

    // Update indicators
    $$('.step-indicator').forEach(function (ind) {
      var step = parseInt(ind.getAttribute('data-step'), 10);
      ind.classList.remove('active', 'completed');
      if (step < num) ind.classList.add('completed');
      else if (step === num) ind.classList.add('active');
    });
    $('#stepLine1').classList.toggle('active', num >= 2);
    $('#stepLine2').classList.toggle('active', num >= 3);

    if (num === 3) updateSummary();
  }

  function updateSummary() {
    if (!selectedService || !selectedBarber) return;
    bookingSummary.innerHTML = ''
      + '<p class="booking-summary-title">Resumen de tu cita</p>'
      + '<div class="booking-summary-row"><span>Servicio</span><span>' + selectedService.name + '</span></div>'
      + '<div class="booking-summary-row"><span>Barbero</span><span>' + selectedBarber.name + '</span></div>'
      + '<div class="booking-summary-row"><span>Duración</span><span>' + selectedService.time + '</span></div>'
      + '<div class="booking-summary-row booking-summary-total"><span>Total</span><span>' + fmtPrice(selectedService.price) + '</span></div>';
  }

  toStep2.addEventListener('click', function () { if (selectedService) goToStep(2); });
  toStep3.addEventListener('click', function () { if (selectedBarber) goToStep(3); });
  backTo1.addEventListener('click', function () { goToStep(1); });
  backTo2.addEventListener('click', function () { goToStep(2); });

  // Pre-select from modal
  function preSelectService(id) {
    selectedService = services.find(function (s) { return s.id === id; });
    serviceOptions.querySelectorAll('.booking-option').forEach(function (o) {
      o.classList.toggle('selected', parseInt(o.getAttribute('data-option-service'), 10) === id);
    });
    toStep2.disabled = false;
    if (selectedBarber) {
      goToStep(3);
    } else {
      goToStep(2);
    }
  }

  function preSelectBarber(id) {
    selectedBarber = barbers.find(function (b) { return b.id === id; });
    barberOptions.querySelectorAll('.booking-option').forEach(function (o) {
      o.classList.toggle('selected', parseInt(o.getAttribute('data-option-barber'), 10) === id);
    });
    toStep3.disabled = false;
    if (selectedService) {
      goToStep(3);
    } else {
      goToStep(1);
    }
  }

  // Form submit
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#bookName').value;
    var date = $('#bookDate').value;
    var time = $('#bookTime').value;

    var dateObj = new Date(date + 'T' + time);
    var dateStr = dateObj.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    var timeStr = dateObj.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

    successMsg.innerHTML = ''
      + '<strong>' + selectedService.name + '</strong> con <strong>' + selectedBarber.name + '</strong><br>'
      + dateStr + ' a las ' + timeStr + '<br>'
      + 'Total: <strong>' + fmtPrice(selectedService.price) + '</strong>';

    bookingForm.style.display = 'none';
    bookingSuccess.classList.add('show');
  });

  newBookingBtn.addEventListener('click', function () {
    bookingForm.style.display = '';
    bookingSuccess.classList.remove('show');
    selectedService = null;
    selectedBarber = null;
    $$('.booking-option').forEach(function (o) { o.classList.remove('selected'); });
    toStep2.disabled = true;
    toStep3.disabled = true;
    bookingForm.reset();
    goToStep(1);
  });

  // Set min date to today
  var dateInput = $('#bookDate');
  var today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);

  /* ================================================================
     PRODUCTS
     ================================================================ */
  var productsGrid = $('#productsGrid');
  var productFilters = $('#productFilters');

  function renderProducts(cat) {
    var filtered = cat === 'all'
      ? products
      : products.filter(function (p) { return p.category === cat; });

    if (filtered.length === 0) {
      productsGrid.innerHTML = '<p style="text-align:center;color:var(--gray-500);padding:40px;">No hay productos en esta categoría.</p>';
      return;
    }

    productsGrid.innerHTML = filtered.map(function (p) {
      var badge = p.badge ? '<span class="product-card-badge">' + p.badge + '</span>' : '';
      var oldPrice = p.oldPrice ? '<span class="product-card-old-price">' + fmtPrice(p.oldPrice) + '</span>' : '';
      var catLabel = p.category === 'cabello' ? 'Cabello' : p.category === 'barba' ? 'Barba' : 'Accesorios';
      return ''
        + '<div class="product-card" data-product-id="' + p.id + '">'
        +   '<div class="product-card-img">'
        +     badge
        +     '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" />'
        +   '</div>'
        +   '<div class="product-card-body">'
        +     '<span class="product-card-category">' + catLabel + '</span>'
        +     '<h3 class="product-card-name">' + p.name + '</h3>'
        +     '<p class="product-card-desc">' + p.desc + '</p>'
        +     '<div class="product-card-footer">'
        +       '<span class="product-card-price">' + oldPrice + fmtPrice(p.price) + '</span>'
        +       '<button class="btn-buy" data-buy-id="' + p.id + '">'
        +         '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'
        +         'Comprar'
        +       '</button>'
        +     '</div>'
        +   '</div>'
        + '</div>';
    }).join('');

    // Add click to open detail modal
    productsGrid.querySelectorAll('[data-product-id]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.btn-buy')) return;
        var id = parseInt(card.getAttribute('data-product-id'), 10);
        var p = products.find(function (x) { return x.id === id; });
        openProductModal(p);
      });
    });

    // Buy button
    productsGrid.querySelectorAll('[data-buy-id]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = parseInt(btn.getAttribute('data-buy-id'), 10);
        var p = products.find(function (x) { return x.id === id; });
        showToast(p.name + ' agregado al carrito — ' + fmtPrice(p.price));
      });
    });
  }

  // Product filters
  productFilters.querySelectorAll('.product-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      productFilters.querySelectorAll('.product-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProducts(btn.getAttribute('data-filter'));
    });
  });

  renderProducts('all');

  // Product modal
  function openProductModal(p) {
    var detailRows = '';
    Object.keys(p.details).forEach(function (key) {
      detailRows += ''
        + '<div class="modal-detail-row">'
        +   '<span class="modal-detail-label">' + key + '</span>'
        +   '<span class="modal-detail-value">' + p.details[key] + '</span>'
        + '</div>';
    });

    var oldPriceHtml = p.oldPrice
      ? '<span style="text-decoration:line-through;color:var(--gray-600);font-size:16px;margin-right:8px;">' + fmtPrice(p.oldPrice) + '</span>'
      : '';

    modalContent.innerHTML = ''
      + '<img class="modal-img" src="' + p.image + '" alt="' + p.name + '" style="object-position:center;" />'
      + '<div class="modal-body">'
      +   '<h2 class="modal-title">' + p.name + '</h2>'
      +   '<p class="modal-subtitle">' + (p.category === 'cabello' ? 'Cuidado del Cabello' : p.category === 'barba' ? 'Cuidado de Barba' : 'Accesorio') + '</p>'
      +   '<p class="modal-desc">' + p.desc + '</p>'
      +   '<div class="modal-details">' + detailRows + '</div>'
      +   '<div class="modal-detail-row">'
      +     '<span class="modal-detail-label">Precio</span>'
      +     '<span class="modal-detail-value gold">' + oldPriceHtml + fmtPrice(p.price) + '</span>'
      +   '</div>'
      +   '<button class="btn-primary modal-cta" data-buy-modal="' + p.id + '">'
      +     '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'
      +     'Agregar al Carrito'
      +   '</button>'
      + '</div>';

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    var cta = modalContent.querySelector('[data-buy-modal]');
    if (cta) {
      cta.addEventListener('click', function () {
        var id = parseInt(cta.getAttribute('data-buy-modal'), 10);
        var prod = products.find(function (x) { return x.id === id; });
        closeModal();
        showToast(prod.name + ' agregado al carrito — ' + fmtPrice(prod.price));
      });
    }
  }

  // Toast notification
  var toastTimer = null;
  function showToast(text) {
    var existing = $('.toast');
    if (existing) existing.remove();
    if (toastTimer) clearTimeout(toastTimer);

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = ''
      + '<span class="toast-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>'
      + '<span class="toast-text">' + text + '</span>';
    document.body.appendChild(toast);

    requestAnimationFrame(function () { toast.classList.add('show'); });

    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 400);
    }, 3000);
  }

  /* ================================================================
     FOOTER SERVICES
     ================================================================ */
  var footerServices = $('#footerServices');
  footerServices.innerHTML = services.map(function (s) {
    return '<li><a href="#servicios">' + s.name + '</a></li>';
  }).join('');

  /* ================================================================
     WHATSAPP
     ================================================================ */
  var whatsappBtn = $('#whatsappBtn');
  whatsappBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var msg = '¡Hola! Me gustaría información sobre los servicios de Elite Barber 💈';
    window.open('https://wa.me/50377774400?text=' + encodeURIComponent(msg), '_blank');
  });

  /* ================================================================
     SCROLL REVEAL
     ================================================================ */
  var revealSelectors = '.section-header, .service-card, .barber-card, .gallery-item, ' +
    '.product-card, .review-card, .booking-wrap, .location-map, .info-card, .footer-content';

  document.querySelectorAll(revealSelectors).forEach(function (el) {
    el.classList.add('scroll-reveal');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.scroll-reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- Rebuild dots after images load ---------- */
  window.addEventListener('load', function () {
    buildDots(servicesTrack, servicesDots);
    buildDots(galleryTrack, galleryDots);
  });

})();
