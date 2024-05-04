# 備忘録

## レンダリングの条件について

以下の条件でコンポーネントはサイレンダリングされる。

1. stateが更新されたコンポーネント
2. propsが変更変更されたコンポーネント
3. 再レンダリングされたコンポーネント配下の小要素

## 再レンダリングされたコンポーネント配下の小要素ついて

Reactでは、親コンポーネントがレンダリングされた時、子要素も一緒にレンダリングされる。

それを防ぐためには`memo`を使って再コンポーネントを防ぐことができる。

### 使用例

```js
export const ChildArea = memo(props => {
    const { open, onClickClose } = props;
    return (
        <>
            {open ? (
                <div style={sytle}>
                    <p>子コンポーネント</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            ) : null}
        </>
    );
});
```
