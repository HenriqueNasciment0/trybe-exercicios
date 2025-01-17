# # importação do webdriver, que é o que possibilita a implementação para todos
# # os principais navegadores da web
# from selenium import webdriver
# from selenium.webdriver.edge.service import Service as EdgeService
# from webdriver_manager.microsoft import EdgeChromiumDriverManager

# edge = webdriver.Edge(service=EdgeService(EdgeChromiumDriverManager().install()))

# # requisições para essa instância criada utilizando o método `get`
# response = edge.get("https://www.python.org/")

# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.python.org/")
