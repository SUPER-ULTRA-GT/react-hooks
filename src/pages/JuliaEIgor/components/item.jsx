const Item = ({ nome, preco, id, add, remove, quantidade }) => {
    return (
        <div className="bg-violet-200 py-3.5 px-5 w-[50%] rounded-2xl">
            <h2 className="text-[22px] font-semibold">{nome}</h2>
            <section className="flex items-center justify-between" >
                    <p>R${preco.toFixed(2).replace('.', ',')}</p>
                    <section className="flex gap-2.5">
                        <button className="border rounded-[10px] text-lg px-2.5" onClick={remove(id)}>-</button>
                        <p>{quantidade}</p>
                        <button className="border rounded-[10px] text-lg px-2" onClick={add(id)}>+</button>
                    </section>
                </section>
        </div>
    );
};

export default Item;