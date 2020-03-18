import requests
import urllib.request
from bs4 import BeautifulSoup

req = requests.get("https://www.op.gg/champion/statistics")
html = req.text
soup = BeautifulSoup(html, 'html.parser')

champ_names = soup.select(
    'a > div.champion-index__champion-item__name'
)
champ_positions = soup.select(
    'a > div.champion-index__champion-item__positions'
)

url = "https://kr.leagueoflegends.com/ko-kr/champions/"
req = urllib.request.Request(url)
res = urllib.request.urlopen(url).read()
soup = BeautifulSoup(res, 'html.parser')
soup = soup.findAll("span", class_="style__ImageContainer-sc-12h96bu-1 klVtHm")

# 145
for name, position in zip(champ_names, champ_positions):
    print(name.text, position.text)
