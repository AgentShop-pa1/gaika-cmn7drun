'use client'

import { useState } from 'react'

export default function Page() {
  const [activeService, setActiveService] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const services = [
    {
      title: 'Брендинг',
      description: 'Создаём уникальные бренды, которые запоминаются и вызывают доверие',
      items: ['Фирменный стиль', 'Логотип', 'Гайдлайны', 'Нейминг']
    },
    {
      title: 'Веб-дизайн',
      description: 'Проектируем сайты, которые конвертируют посетителей в клиентов',
      items: ['UX/UI дизайн', 'Лендинги', 'Корпоративные сайты', 'Интернет-магазины']
    },
    {
      title: 'Разработка',
      description: 'Разрабатываем быстрые и масштабируемые веб-приложения',
      items: ['Frontend', 'Backend', 'Mobile Apps', 'API интеграции']
    },
    {
      title: 'Маркетинг',
      description: 'Привлекаем целевую аудиторию и увеличиваем продажи',
      items: ['SEO продвижение', 'Контекстная реклама', 'SMM', 'Email-маркетинг']
    }
  ]

  const projects = [
    {
      title: 'E-commerce платформа',
      category: 'Разработка',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'Ребрендинг финтех стартапа',
      category: 'Брендинг',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    },
    {
      title: 'SaaS приложение',
      category: 'Веб-дизайн',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      title: 'Продвижение медицинской клиники',
      category: 'Маркетинг',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">1440°</div>
          <ul className="hidden md:flex gap-8 text-sm">
            <li><a href="#services" className="hover:text-gray-400 transition">Услуги</a></li>
            <li><a href="#projects" className="hover:text-gray-400 transition">Проекты</a></li>
            <li><a href="#about" className="hover:text-gray-400 transition">О нас</a></li>
            <li><a href="#contact" className="hover:text-gray-400 transition">Контакты</a></li>
          </ul>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            Обсудить проект
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Создаём<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              цифровые продукты
            </span><br />
            будущего
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl">
            Полный цикл разработки: от идеи до запуска. Помогаем бизнесу расти в digital-среде.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition">
              Начать проект
            </button>
            <button className="border border-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition">
              Посмотреть работы
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className={`p-8 rounded-2xl cursor-pointer transition-all ${
                  activeService === index
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 scale-105'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Наши проекты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm text-purple-400 mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">О студии</h2>
              <p className="text-xl text-gray-300 mb-6">
                Мы — команда из 25+ специалистов, которые создают digital-продукты мирового уровня.
              </p>
              <p className="text-gray-400 mb-8">
                С 2018 года реализовали более 200 проектов для стартапов и крупного бизнеса. 
                Наш подход — сочетание креативности, технологий и бизнес-аналитики.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                  <div className="text-sm text-gray-400">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
                  <div className="text-sm text-gray-400">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-sm text-gray-400">Специалистов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">Начнём работу?</h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Расскажите о вашем проекте, и мы свяжемся с вами в течение 24 часов
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Расскажите о проекте"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">1440°</div>
              <p className="text-gray-400 text-sm">Digital-студия полного цикла</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Брендинг</a></li>
                <li><a href="#" className="hover:text-white transition">Веб-дизайн</a></li>
                <li><a href="#" className="hover:text-white transition">Разработка</a></li>
                <li><a href="#" className="hover:text-white transition">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@1440.space</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, Тверская 1</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-400">
            <p>© 2024 1440°. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}