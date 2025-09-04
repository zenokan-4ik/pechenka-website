import usePageStore from '../zustand/store'

const Mobile = () => {
    const {page, toPage} = usePageStore()

    return (
        <div>
            mob
        </div>
    )
}

export default Mobile