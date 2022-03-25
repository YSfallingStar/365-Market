import { useMemo } from "react";
import useActions from "../../hooks/useActions";
import useOrders from "../../hooks/useOrders";
import usePrototypes from "../../hooks/usePrototypes";

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();

  const totalPrcie = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">아직 어떤 주문도 받지 않았습니다.</div>
          <div className="subtitle">주문을 추가하려면 "구매"를 클릭하십시오.</div>
        </div>
      </aside>
    );
  }

  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  <button className="btn--link" onClick={click}>
                    <i className="icon icon--cross" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">합계</div>
            <div className="action">
              <div className="price"> {totalPrcie}원</div>
            </div>
            <button className="btn btn--ilnk" onClick={removeAll}>
              <i className="icon icon--delete" />
            </button>
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            체크아웃
          </button>
        </div>
      </div>
    </aside>
  );
}