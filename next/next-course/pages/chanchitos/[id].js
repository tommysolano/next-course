import useIsMounted from "../../hooks/useIsMounted"
import { useRouter } from "next/router"

const ChanchitoDinamico = () => {

    // solo se puede usar el valor los parametros cuando el valor de isReady sea true, esto hace que no tengamos el problema de que al traer un parametro nos mande undefined al principio

    const isMounted = useIsMounted()
    const router = useRouter()

    if(!isMounted) {
        return null
    }

    console.log({router}, router.query.id)

    return (
        <div>
            <p>
                chanchito dinamico
            </p>
        </div>
    )
}

export default ChanchitoDinamico