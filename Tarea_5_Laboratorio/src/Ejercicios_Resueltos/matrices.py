def esEscalar(m):
    d = m[0][0]
    for i in range(len(m)):
        for j in range(len(m)):
            if i != j:
                if m[i][j] != 0:
                    print(f"Elemento no nulo fuera de la diagonal: m[{i}][{j}] = {m[i][j]}")
                    return False
            elif m[i][j] != d:
                print(f"Elemento distinto en la diagonal: m[{i}][{j}] = {m[i][j]}")
                return False
    return True

def esUnitaria(m):
    return m[0][0] == 1 and esEscalar(m)

# Pruebas
if __name__ == "__main__":
    matriz_escalar = [
        [5, 0, 0],
        [0, 5, 0],
        [0, 0, 5]
    ]

    matriz_unitaria = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ]

    matriz_no_escalar = [
        [5, 1, 0],
        [0, 5, 0],
        [0, 0, 5]
    ]

    print("Matriz Escalar:")
    print(esEscalar(matriz_escalar))  # True

    print("\nMatriz Unitaria:")
    print(esUnitaria(matriz_unitaria))  # True

    print("\nMatriz No Escalar:")
    print(esEscalar(matriz_no_escalar))  # False
