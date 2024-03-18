//funzione che somma o concatena
function sommaConcatenaGeneric<T>(a:T, b:T):T{
    return (a as any) + b
}

sommaConcatenaGeneric<string>('Hello','World')

sommaConcatenaGeneric<number>(4,4)