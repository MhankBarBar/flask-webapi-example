from bs4 import BeautifulSoup as bs
from requests import get
from html2text import html2text

def cnbc(req):
    """
    kategori: news, terbaru, investment, market, entreprenur, syariah, tech, lifestyle, opini, profil
    """
    if (kategori := req.args.get('kate')):
        kate = {'news':'https://www.cnbcindonesia.com/news/rss','terbaru': 'https://www.cnbcindonesia.com/rss','investment': 'https://www.cnbcindonesia.com/investment/rss','market': 'https://www.cnbcindonesia.com/market/rss','entreprenur': 'https://www.cnbcindonesia.com/entreprenur/rss','syariah': 'https://www.cnbcindonesia.com/syariah/rss','tech': 'https://www.cnbcindonesia.com/tech/rss','lifestyle': 'https://www.cnbcindonesia.com/lifestyle/rss','opini': 'https://www.cnbcindonesia.com/opini/rss','profil': 'https://www.cnbcindonesia.com/profil/rss'}
        if not kate.get(kategori.lower()):return {'status': False, 'msg': 'kategori yang tersedia hanya : news, terbaru, investment, market, entreprenur, syariah, tech, lifestyle, opini, profil'}
        ikeh = bs(get(kate.get(kategori.lower())).text, 'xml')
        title = [html2text(ahh.text).strip() for ahh in ikeh.findAll('title')[2::]]
        desc = [kimochi.text for kimochi in ikeh.findAll('content:encoded')]
        thumb = [omangko['url'].replace('360','1280').replace('90','720') for omangko in ikeh.findAll('enclosure')]
        url = [ochinpo.text for ochinpo in ikeh.findAll('link')[3::]]
        pub = [oshiri.text for oshiri in ikeh.findAll('pubDate')]
        results = [{"title": title[oppai], "description": desc[oppai], "url": url[oppai], "thumbnail": thumb[oppai], "pubdate": pub[oppai]} for oppai, _ in enumerate(title)]
        return {'status': True, 'result': results}
    else:
        return {'status': False, 'msg': 'kate parameter can\'t empty'}
