import pandas as pd
import matplotlib.pyplot as plt

# Função para calcular o crescimento de usuários
def simular_crescimento(usuarios_iniciais, crescimento_mensal, meses):
    usuarios = [usuarios_iniciais]
    for mes in range(1, meses + 1):
        usuarios.append(usuarios[-1] * (1 + crescimento_mensal))
    return usuarios

# Entrada de dados pelo usuário
usuarios_iniciais = int(input("Insira o número inicial de usuários: "))
crescimento_mensal = float(input("Insira a taxa de crescimento mensal (em decimal, ex: 0.05 para 5%): "))
meses = int(input("Insira a quantidade de meses: "))

# Simulação
usuarios = simular_crescimento(usuarios_iniciais, crescimento_mensal, meses)

# Criando o dataframe
df_crescimento = pd.DataFrame({
    "Mês": range(meses + 1),
    "Número de Usuários": usuarios
})

# Exibindo o dataframe e salvando os resultados num arquivo CSV
print("\nCrescimento mês a mês:")
print(df_crescimento)
df_crescimento.to_csv('crescimento_usuarios.csv', index=False)

# Plotando o gráfico
plt.plot(df_crescimento["Mês"], df_crescimento["Número de Usuários"], marker='o', color='b')
plt.xlabel('Meses')
plt.ylabel('Número de Usuários')
plt.title('Projeção de Crescimento de Usuários')
plt.grid(True)
plt.show()
