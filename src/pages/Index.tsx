import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gothic-black text-gothic-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gothic-black/95 backdrop-blur-sm border-b border-gothic-gray/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-playfair font-bold">
              Gothic Photography
            </div>
            <div className="hidden md:flex space-x-8 font-source">
              <a
                href="#home"
                className="hover:text-gothic-gray transition-colors"
              >
                Главная
              </a>
              <a
                href="#portfolio"
                className="hover:text-gothic-gray transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#services"
                className="hover:text-gothic-gray transition-colors"
              >
                Услуги
              </a>
              <a
                href="#reviews"
                className="hover:text-gothic-gray transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="hover:text-gothic-gray transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                Готическая
                <br />
                <span className="text-gothic-gray">Фотография</span>
              </h1>
              <p className="text-xl text-gothic-gray font-source leading-relaxed">
                Создаю таинственные и элегантные портреты, которые раскрывают
                глубину души через игру света и тени
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gothic-white text-gothic-black hover:bg-gothic-gray"
                >
                  Посмотреть портфолио
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gothic-gray text-gothic-white hover:bg-gothic-gray/10"
                >
                  Связаться со мной
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gothic-dark rounded-lg overflow-hidden">
                <img
                  src="/img/74885179-b306-46ac-811b-66e00fa3bd5c.jpg"
                  alt="Gothic Photography Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gothic-white rounded-full flex items-center justify-center">
                <Icon name="Camera" size={32} className="text-gothic-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gothic-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Портфолио</h2>
            <p className="text-gothic-gray font-source max-w-2xl mx-auto">
              Коллекция избранных работ, отражающих мою страсть к готической
              эстетике и художественной фотографии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gothic-black border-gothic-gray/20 overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/img/74885179-b306-46ac-811b-66e00fa3bd5c.jpg"
                    alt="Gothic Portrait 1"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">
                    Портрет в зеркале
                  </h3>
                  <p className="text-gothic-gray font-source">
                    Игра отражений и теней
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gothic-black border-gothic-gray/20 overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/img/d4163735-d756-4cdf-98ed-46439c8a64cd.jpg"
                    alt="Gothic Wedding"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">
                    Готическая свадьба
                  </h3>
                  <p className="text-gothic-gray font-source">
                    Романтика темных оттенков
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gothic-black border-gothic-gray/20 overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/img/6ad033fa-34c1-4e40-932e-6a77437def81.jpg"
                    alt="Gothic Fashion"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">
                    Модная съемка
                  </h3>
                  <p className="text-gothic-gray font-source">
                    Элегантность и мистика
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Услуги</h2>
            <p className="text-gothic-gray font-source max-w-2xl mx-auto">
              Профессиональная фотосъемка в готическом стиле для особых моментов
              вашей жизни
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gothic-black border-gothic-gray/20 p-8 text-center">
              <div className="w-16 h-16 bg-gothic-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="User" size={32} className="text-gothic-black" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Портретная съемка
              </h3>
              <p className="text-gothic-gray font-source mb-6">
                Индивидуальные портреты в готическом стиле с профессиональным
                освещением
              </p>
              <Button
                variant="outline"
                className="border-gothic-gray text-gothic-white"
              >
                от 5000 ₽
              </Button>
            </Card>
            <Card className="bg-gothic-black border-gothic-gray/20 p-8 text-center">
              <div className="w-16 h-16 bg-gothic-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-gothic-black" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Свадебная съемка
              </h3>
              <p className="text-gothic-gray font-source mb-6">
                Романтичные и таинственные свадебные фотографии в готическом
                стиле
              </p>
              <Button
                variant="outline"
                className="border-gothic-gray text-gothic-white"
              >
                от 15000 ₽
              </Button>
            </Card>
            <Card className="bg-gothic-black border-gothic-gray/20 p-8 text-center">
              <div className="w-16 h-16 bg-gothic-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" size={32} className="text-gothic-black" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                Модная съемка
              </h3>
              <p className="text-gothic-gray font-source mb-6">
                Стильные фотосессии для портфолио и коммерческих проектов
              </p>
              <Button
                variant="outline"
                className="border-gothic-gray text-gothic-white"
              >
                от 8000 ₽
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-6 bg-gothic-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Отзывы</h2>
            <p className="text-gothic-gray font-source max-w-2xl mx-auto">
              Что говорят мои клиенты о работе и результатах фотосессий
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gothic-black border-gothic-gray/20 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gothic-gray rounded-full flex items-center justify-center mr-4">
                  <Icon name="User" size={24} className="text-gothic-black" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold">Анастасия</h4>
                  <p className="text-gothic-gray text-sm font-source">Модель</p>
                </div>
              </div>
              <p className="text-gothic-gray font-source leading-relaxed">
                "Потрясающая работа! Фотографии получились невероятно
                атмосферными. Мастер своего дела, который понимает готическую
                эстетику."
              </p>
            </Card>
            <Card className="bg-gothic-black border-gothic-gray/20 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gothic-gray rounded-full flex items-center justify-center mr-4">
                  <Icon name="User" size={24} className="text-gothic-black" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold">Дмитрий и Елена</h4>
                  <p className="text-gothic-gray text-sm font-source">
                    Свадебная пара
                  </p>
                </div>
              </div>
              <p className="text-gothic-gray font-source leading-relaxed">
                "Наша готическая свадьба была запечатлена идеально! Каждый кадр
                - произведение искусства. Спасибо за волшебные фотографии."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Контакты</h2>
            <p className="text-gothic-gray font-source max-w-2xl mx-auto">
              Готовы создать что-то прекрасное вместе? Свяжитесь со мной для
              обсуждения вашей фотосессии
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gothic-white rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-gothic-black" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold">Телефон</h4>
                  <p className="text-gothic-gray font-source">
                    +7 (999) 123-45-67
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gothic-white rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-gothic-black" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold">Email</h4>
                  <p className="text-gothic-gray font-source">
                    gothic@photo.ru
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gothic-white rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-gothic-black" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold">Студия</h4>
                  <p className="text-gothic-gray font-source">
                    Москва, ул. Темная, 13
                  </p>
                </div>
              </div>
            </div>
            <Card className="bg-gothic-black border-gothic-gray/20 p-8">
              <h3 className="text-xl font-playfair font-bold mb-6">
                Напишите мне
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-source mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gothic-dark border border-gothic-gray/20 rounded-lg text-gothic-white font-source"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-source mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gothic-dark border border-gothic-gray/20 rounded-lg text-gothic-white font-source"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-source mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-gothic-dark border border-gothic-gray/20 rounded-lg text-gothic-white font-source"
                    placeholder="Расскажите о вашей идее фотосессии..."
                  ></textarea>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gothic-white text-gothic-black hover:bg-gothic-gray"
                >
                  Отправить сообщение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gothic-gray/20">
        <div className="container mx-auto text-center">
          <p className="text-gothic-gray font-source">
            © 2024 Gothic Photography. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
