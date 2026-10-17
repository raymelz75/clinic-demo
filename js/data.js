/* =========================================================
   Appointment demo (Clinic / Salon / Gym) — designed by Raymelz
   All industry content lives here. Edit text, prices and photos freely.
   ========================================================= */

const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const AV = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=120&q=70`;

const THEMES = {
  /* ------------------------------------------------------------------ */
  clinic: {
    label: 'Clinic',
    brand: 'Your Clinic',
    tagline: 'Multi-Speciality Care',
    logo: 'plus',
    book: 'Book Appointment',
    bookShort: 'Book Now',
    staff: 'Doctor',
    staffPlural: 'Doctors',
    title: 'Your Clinic Name | Trusted Multi-Speciality Clinic',
    hero: {
      eyebrow: 'Trusted by 25,000+ families',
      title: 'Expert care for your <em>whole family.</em>',
      sub: 'This is your clinic\'s welcome message. Tell patients why they can trust you. For example: "Experienced doctors, modern equipment and same-day appointments, all under one roof."',
      img: U('1594824476967-48c8b964273f', 900),
      chips: [
        ['live', 'Next available', 'Today, 4:30 PM'],
        ['star', '4.9 rating', '1,200+ Google reviews'],
        ['users', '15+ specialists', 'Under one roof']
      ]
    },
    info: [
      ['clock', 'Open today', '9:00 AM – 9:00 PM'],
      ['phone', 'Appointments', '+91 98765 43210'],
      ['alert', 'Emergency', '24/7 helpline'],
      ['pin', 'Location', 'Your Area, Your City']
    ],
    servicesHead: ['Our Specialities', 'Complete care, <em>one place.</em>', 'List every treatment and speciality you offer, with clear timings and fees so patients can book with confidence.'],
    services: [
      ['steth', 'General Consultation', 'Fevers, infections, BP, diabetes and everyday health concerns.', '20 min', 500],
      ['tooth', 'Dental Care', 'Cleaning, fillings, root canal, braces and smile makeovers.', '45 min', 800],
      ['baby', 'Pediatrics', 'Vaccinations, growth checks and gentle care for little ones.', '30 min', 600],
      ['heart', 'Women\'s Health', 'Gynaecology, pregnancy care and wellness screenings.', '30 min', 700],
      ['flask', 'Diagnostics & Lab', 'Blood tests, ECG and X-ray with same-day digital reports.', '15 min', 299],
      ['bone', 'Physiotherapy', 'Back pain, sports injuries and post-surgery rehab.', '45 min', 900]
    ],
    about: {
      head: ['Why Choose Us', 'Healthcare that puts <em>you first.</em>'],
      p: [
        'This is where you tell patients your story: when the clinic started, your doctors\' experience and the care philosophy that makes you different.',
        'Modern equipment, minimal waiting time and doctors who actually listen. That\'s the experience every patient deserves.'
      ],
      points: ['Experienced, certified doctors', 'Minimal waiting time', 'Digital prescriptions & reports', 'Cashless insurance accepted'],
      img1: U('1631217868264-e5b90bb7e133', 900),
      img2: U('1519494026892-80bbd2d6fd0d', 600),
      badge: ['15+', 'Years of care'],
      stats: [[25000, '+', 'Happy patients'], [15, '+', 'Specialists'], [98, '%', 'Patient satisfaction']]
    },
    teamHead: ['Meet the Team', 'Our expert <em>doctors.</em>', 'Put faces to your clinic. Patients feel more comfortable when they know who will treat them.'],
    team: [
      ['Dr. Arjun Mehta', 'General Physician', '15 yrs experience', U('1612349317150-e413f6a5b16d', 600)],
      ['Dr. Kavya Reddy', 'Dental Surgeon', '12 yrs experience', U('1559839734-2b71ea197ec2', 600)],
      ['Dr. Rahul Verma', 'Pediatrician', '10 yrs experience', U('1622253692010-333f2da6031d', 600)],
      ['Dr. Sneha Iyer', 'Gynaecologist', '14 yrs experience', U('1594824476967-48c8b964273f', 600)]
    ],
    pricingHead: ['Health Packages', 'Preventive care, <em>simple pricing.</em>', 'Show your popular packages upfront. Transparent pricing builds trust and brings more bookings.'],
    pricingToggle: null,
    plans: [
      ['Basic Checkup', 999, '/ person', ['Doctor consultation', 'CBC & blood sugar', 'BP & BMI check', 'Digital report'], false],
      ['Full Body Checkup', 2499, '/ person', ['60+ lab tests', 'ECG & chest X-ray', 'Doctor review', 'Diet consultation', 'Free follow-up'], true],
      ['Senior Citizen', 3499, '/ person', ['Cardiac profile', 'Bone density scan', 'Eye & hearing check', 'Home sample pickup'], false]
    ],
    gallery: ['1519494026892-80bbd2d6fd0d', '1629909613654-28e377c37b09', '1588776814546-1ffcf47267a5', '1551076805-e1869033e561', '1606811971618-4486d14f3f99', '1631217868264-e5b90bb7e133'],
    galleryHead: ['Our Facility', 'Modern, clean & <em>comfortable.</em>'],
    testimonials: [
      ['Dr. Kavya made my root canal completely painless. The clinic is spotless and I didn\'t wait even 10 minutes.', 'Ananya Iyer', 'Dental patient', AV('1438761681033-6461ffad8d80')],
      ['Our family doctor for 5 years now. Booking online is so easy and the reports come on WhatsApp the same day.', 'Karthik Raman', 'Regular patient', AV('1507003211169-0a1dd7228f2d')],
      ['Dr. Rahul is wonderful with kids. My daughter actually looks forward to her check-ups now!', 'Meera Nair', 'Parent', AV('1494790108377-be9c29b29330')]
    ],
    faqs: [
      ['Do I need an appointment or can I walk in?', 'Walk-ins are welcome, but booking online guarantees your slot and keeps waiting time under 10 minutes.'],
      ['Do you accept health insurance?', 'Yes, we offer cashless treatment with all major insurance providers and TPAs.'],
      ['How do I get my lab reports?', 'Reports are sent to your WhatsApp and email the same day, usually within 6 hours.'],
      ['Is home sample collection available?', 'Yes, home sample pickup is free for packages and available for a small fee on individual tests.'],
      ['Can I reschedule my appointment?', 'Of course. Reschedule or cancel for free up to 2 hours before your slot.']
    ],
    slots: { start: 9, end: 21, closed: [0] },
    hours: [['Mon – Sat', '9:00 AM – 9:00 PM'], ['Sunday', 'Emergency only'], ['Lab', '7:00 AM – 7:00 PM']]
  },

  /* ------------------------------------------------------------------ */
  salon: {
    label: 'Salon',
    brand: 'Your Salon',
    tagline: 'Hair · Beauty · Spa',
    logo: 'scissors',
    book: 'Book Appointment',
    bookShort: 'Book Now',
    staff: 'Stylist',
    staffPlural: 'Stylists',
    title: 'Your Salon Name | Hair, Beauty & Bridal Studio',
    hero: {
      eyebrow: 'Hair · Skin · Nails · Bridal',
      title: 'Look good. <em>Feel beautiful.</em>',
      sub: 'This is your salon\'s welcome message. Tell clients what makes your studio special. For example: "Expert stylists, premium products and a relaxing experience every single visit."',
      img: U('1522337360788-8b13dee7a37e', 900),
      chips: [
        ['live', 'Next slot', 'Today, 3:00 PM'],
        ['star', '4.8 rating', '900+ happy reviews'],
        ['gift', 'Bridal 2026', 'Bookings now open']
      ]
    },
    info: [
      ['clock', 'Open today', '10:00 AM – 9:00 PM'],
      ['phone', 'Bookings', '+91 98765 43210'],
      ['gift', 'Offer', '20% off first visit'],
      ['pin', 'Location', 'Your Area, Your City']
    ],
    servicesHead: ['Our Services', 'Beauty, crafted <em>just for you.</em>', 'Show every service with its price and time so clients can pick, book and look forward to their visit.'],
    services: [
      ['scissors', 'Haircut & Styling', 'Precision cuts, blow-dry and styling for every hair type.', '45 min', 499],
      ['drop', 'Hair Colour & Highlights', 'Global colour, balayage and highlights with premium brands.', '2 hr', 1999],
      ['sparkle', 'Facial & Skin Care', 'Hydrating facials, cleanups and glow treatments.', '60 min', 1299],
      ['hand', 'Manicure & Pedicure', 'Nail care, gel polish and nail art in a hygienic setup.', '60 min', 899],
      ['crown', 'Bridal Makeup', 'HD & airbrush makeup, hair styling and draping.', '3 hr', 14999],
      ['leaf', 'Spa & Massage', 'Aromatherapy and deep tissue massage to unwind.', '60 min', 1799]
    ],
    about: {
      head: ['Our Studio', 'Where style meets <em>self-care.</em>'],
      p: [
        'This is where you share your salon\'s story: how you started, your stylists\' expertise and the experience you create for every client.',
        'Premium products, sanitised tools and a team that listens. Because you deserve to walk out feeling your best.'
      ],
      points: ['Certified expert stylists', 'Premium international brands', '100% sanitised tools', 'Relaxing, private ambience'],
      img1: U('1562322140-8baeececf3df', 900),
      img2: U('1521590832167-7bcbfaa6381f', 600),
      badge: ['10+', 'Years of style'],
      stats: [[18000, '+', 'Happy clients'], [12, '', 'Expert stylists'], [450, '+', 'Brides styled']]
    },
    teamHead: ['Meet the Artists', 'Our expert <em>stylists.</em>', 'Introduce your team. Clients love booking with their favourite stylist.'],
    team: [
      ['Riya Kapoor', 'Senior Hair Stylist', '11 yrs experience', U('1580489944761-15a19d654956', 600)],
      ['Ananya Das', 'Bridal Makeup Artist', '8 yrs experience', U('1544005313-94ddf0286df2', 600)],
      ['Priya Nair', 'Skin & Spa Specialist', '9 yrs experience', U('1519699047748-de8e457a634e', 600)],
      ['Vikram Singh', 'Men\'s Grooming Expert', '7 yrs experience', U('1506794778202-cad84cf45f1d', 600)]
    ],
    pricingHead: ['Packages', 'Pamper yourself, <em>save more.</em>', 'Bundle your services into packages. They raise the average bill and clients love the value.'],
    pricingToggle: null,
    plans: [
      ['Express Glow', 1499, '/ session', ['Haircut & blow-dry', 'Face cleanup', 'Threading', 'Head massage'], false],
      ['Pamper Day', 3999, '/ session', ['Hair spa', 'Signature facial', 'Manicure & pedicure', 'Back massage', 'Complimentary drink'], true],
      ['Bridal Glow', 24999, '/ package', ['3 pre-bridal sessions', 'HD bridal makeup', 'Hair styling & draping', 'Trial session'], false]
    ],
    gallery: ['1560066984-138dadb4c035', '1521590832167-7bcbfaa6381f', '1570172619644-dfd03ed5d881', '1604654894610-df63bc536371', '1487412947147-5cebf100ffc2', '1503951914875-452162b0f3f1'],
    galleryHead: ['Our Work', 'Real looks, <em>real clients.</em>'],
    testimonials: [
      ['Riya understood exactly what I wanted. Best haircut I\'ve had in years, and the head massage was heavenly!', 'Ananya Iyer', 'Regular client', AV('1438761681033-6461ffad8d80')],
      ['Ananya did my bridal makeup and I looked stunning in every photo. The whole team made me feel like a queen.', 'Meera Nair', 'Bride, 2026', AV('1494790108377-be9c29b29330')],
      ['Clean, classy and on time. Vikram\'s beard styling is top-notch. My go-to grooming spot now.', 'Karthik Raman', 'Grooming client', AV('1507003211169-0a1dd7228f2d')]
    ],
    faqs: [
      ['Do I need to book in advance?', 'Walk-ins are welcome, but booking online guarantees your preferred stylist and time.'],
      ['Which products do you use?', 'We use premium professional brands like L\'Oréal Professionnel, Kérastase and O3+.'],
      ['Do you offer bridal trials?', 'Yes, every bridal package includes a trial session so you can finalise your look.'],
      ['Are your tools sanitised?', 'Absolutely. All tools are sterilised after every client and we use disposable kits for nails and waxing.'],
      ['Can I cancel or reschedule?', 'Yes, free rescheduling up to 3 hours before your appointment.']
    ],
    slots: { start: 10, end: 21, closed: [2] },
    hours: [['Wed – Mon', '10:00 AM – 9:00 PM'], ['Tuesday', 'Closed'], ['Bridal', 'By appointment']]
  },

  /* ------------------------------------------------------------------ */
  gym: {
    label: 'Gym',
    brand: 'Your Gym',
    tagline: 'Fitness Club',
    logo: 'dumbbell',
    book: 'Book Free Trial',
    bookShort: 'Free Trial',
    staff: 'Trainer',
    staffPlural: 'Trainers',
    title: 'Your Gym Name | Strength, Cardio & Personal Training',
    hero: {
      eyebrow: 'First week free',
      title: 'Stronger <em>every single day.</em>',
      sub: 'This is your gym\'s welcome message. Tell members what makes you different. For example: "World-class equipment, certified trainers and a community that pushes you further."',
      img: U('1581009146145-b5ef050c2e1e', 900),
      chips: [
        ['live', 'Open now', '5:00 AM – 11:00 PM'],
        ['star', '4.9 rating', '600+ member reviews'],
        ['users', '500+ members', 'Training today']
      ]
    },
    info: [
      ['clock', 'Open daily', '5:00 AM – 11:00 PM'],
      ['phone', 'Call us', '+91 98765 43210'],
      ['gift', 'Offer', '1 week free trial'],
      ['pin', 'Location', 'Your Area, Your City']
    ],
    servicesHead: ['Programs', 'Train the way <em>you want.</em>', 'Show every program and class you offer. Members pick what fits their goals and book a session instantly.'],
    services: [
      ['dumbbell', 'Strength Training', 'Free weights, machines and guided strength programs.', '60 min', 0],
      ['bolt', 'HIIT & Cardio', 'High-energy group sessions that torch calories fast.', '45 min', 0],
      ['target', 'Personal Training', 'One-on-one coaching with a plan built just for you.', '60 min', 999],
      ['leaf', 'Yoga & Mobility', 'Flexibility, balance and recovery for body and mind.', '60 min', 0],
      ['music', 'Zumba & Dance', 'Fun cardio workouts set to high-energy music.', '45 min', 0],
      ['apple', 'Diet & Nutrition', 'Custom meal plans and monthly body composition checks.', '30 min', 499]
    ],
    about: {
      head: ['Why Train With Us', 'More than a gym. <em>A community.</em>'],
      p: [
        'This is where you share your gym\'s story: your mission, your coaches\' credentials and the transformations your members achieve.',
        'Top-grade equipment, spotless facilities and coaches who track your progress. Everything you need to reach your goals faster.'
      ],
      points: ['Certified expert trainers', 'Imported premium equipment', 'Steam, lockers & showers', 'Progress tracking app'],
      img1: U('1599058917212-d750089bc07e', 900),
      img2: U('1518611012118-696072aa579a', 600),
      badge: ['8+', 'Years strong'],
      stats: [[3500, '+', 'Transformations'], [20, '+', 'Weekly classes'], [15, '', 'Expert trainers']]
    },
    teamHead: ['Meet the Coaches', 'Train with the <em>best.</em>', 'Show off your trainers and their specialities. Members choose the coach who matches their goals.'],
    team: [
      ['Rohan Kumar', 'Head Coach · Strength', 'ACE certified, 10 yrs', U('1581009146145-b5ef050c2e1e', 600)],
      ['Neha Sharma', 'HIIT & Functional', 'NASM certified, 7 yrs', U('1594381898411-846e7d193883', 600)],
      ['Aisha Khan', 'Yoga & Mobility', 'RYT-500, 9 yrs', U('1574680096145-d05b474e2155', 600)],
      ['Karan Malhotra', 'Nutrition & PT', 'ISSA certified, 6 yrs', U('1500648767791-00dcc994a43e', 600)]
    ],
    pricingHead: ['Membership', 'Pick your plan. <em>Start today.</em>', 'Clear membership plans make it easy to join. Highlight your best-value plan to boost sign-ups.'],
    plans: [
      ['Monthly', 1999, '/ month', ['Full gym access', 'Locker & showers', 'Fitness assessment', 'Group classes'], false],
      ['Quarterly', 4999, '/ 3 months', ['Everything in Monthly', '2 personal training sessions', 'Diet plan', 'Steam room access', 'Save 17%'], true],
      ['Yearly', 14999, '/ year', ['Everything in Quarterly', '6 PT sessions', 'Monthly body analysis', 'Free gym kit', 'Save 37%'], false]
    ],
    gallery: ['1540497077202-7c8a3999166f', '1599058917212-d750089bc07e', '1518611012118-696072aa579a', '1534438327276-14e5300c3a48', '1517963879433-6ad2b056d712', '1571019613454-1cb2f99b2d8b'],
    galleryHead: ['The Floor', 'Built for <em>serious results.</em>'],
    testimonials: [
      ['Lost 14 kg in 5 months with Rohan\'s program. The trainers genuinely care and the vibe keeps you coming back.', 'Karthik Raman', 'Member since 2024', AV('1507003211169-0a1dd7228f2d')],
      ['Neha\'s HIIT classes are addictive! Best equipment in the city and always spotlessly clean.', 'Meera Nair', 'Member since 2025', AV('1494790108377-be9c29b29330')],
      ['Aisha\'s yoga sessions fixed my back pain completely. Great community, great coaches.', 'Ananya Iyer', 'Member since 2023', AV('1438761681033-6461ffad8d80')]
    ],
    faqs: [
      ['Is the free trial really free?', 'Yes! Your first 7 days are completely free with full gym and class access. No card required.'],
      ['Do I get a trainer when I join?', 'Every member gets a free fitness assessment and a personalised workout plan from our coaches.'],
      ['What are the gym timings?', 'We\'re open every day from 5:00 AM to 11:00 PM, including weekends and holidays.'],
      ['Can I freeze my membership?', 'Yes, quarterly and yearly members can freeze their membership for up to 30 days.'],
      ['Is there parking available?', 'Yes, free parking for two-wheelers and cars is available for all members.']
    ],
    slots: { start: 6, end: 22, closed: [] },
    hours: [['Mon – Sat', '5:00 AM – 11:00 PM'], ['Sunday', '6:00 AM – 9:00 PM'], ['Classes', 'See schedule']]
  }
};
