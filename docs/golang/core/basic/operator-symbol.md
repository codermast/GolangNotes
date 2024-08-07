---
order : 4
---
# 4. 运算符

## 算术运算符

- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法
- `%` 取模（求余）

```go
a := 10
b := 3
sum := a + b      // 13
diff := a - b     // 7
product := a * b  // 30
quotient := a / b // 3
remainder := a % b // 1
```

## 关系运算符

- `==` 等于
- `!=` 不等于
- `<` 小于
- `>` 大于
- `<=` 小于等于
- `>=` 大于等于

```go
a := 10
b := 5
isEqual := (a == b)          // false
isNotEqual := (a != b)       // true
isLess := (a < b)            // false
isGreaterOrEqual := (a >= b) // true
```

## 逻辑运算符

- `&&` 与
- `||` 或
- `!` 非

```go
isTrue := true
isFalse := false
andResult := isTrue && isFalse    // false
orResult := isTrue || isFalse     // true
notResult := !isTrue             // false
```

## 位运算符

- `&` 按位与
- `|` 按位或
- `^` 按位异或
- `<<` 左移
- `>>` 右移

```go
a := 5    // 二进制: 101
b := 3    // 二进制: 011
andResult := a & b    // 1 (二进制: 001)
orResult := a | b     // 7 (二进制: 111)
xorResult := a ^ b    // 6 (二进制: 110)
leftShift := a << 1   // 10 (二进制: 1010)
rightShift := a >> 1  // 2 (二进制: 10)
```

## 赋值运算符

- `=` 简单赋值
- `+=` 加法赋值
- `-=` 减法赋值
- `*=` 乘法赋值
- `/=` 除法赋值
- `%=` 求余赋值
- `<<=` 左移赋值
- `>>=` 右移赋值
- `&=` 按位与赋值
- `|=` 按位或赋值
- `^=` 按位异或赋值

```go
a := 10
b := 5
a += b    // 等同于 a = a + b
```

## 其他运算符

- `&` 取址运算符
- `*` 指针运算符
- `.` 结构体成员访问
- `[]` 数组、切片索引

```go
var i int = 10
var ptr *int
ptr = &i    // ptr 指向变量 i 的地址

var j int = *ptr // 取出指针并获取值

type Person struct{
    name string
    age int
}

var person Person = Person{
    name : "CoderMast",
    age : 18,
}

var name = person.name

var personArr []Person;
```


## 运算符的优先级

和数学中类似，Go语言中，运算符有不同的优先级，这影响了表达式中运算符执行的顺序。以下是Go语言中常见运算符的优先级，从高到低排列：

1. **一元运算符**：
   - `+`（正号）
   - `-`（负号）
   - `!`（逻辑非）
   - `^`（按位取反）

2. **乘性运算符**：
   - `*`（乘法）
   - `/`（除法）
   - `%`（取模）

3. **加性运算符**：
   - `+`（加法）
   - `-`（减法）

4. **位移运算符**：
   - `<<`（左移）
   - `>>`（右移）

5. **位运算符**：
   - `&`（按位与）
   - `|`（按位或）
   - `^`（按位异或）

6. **比较运算符**：
   - `==`（等于）
   - `!=`（不等于）
   - `<`（小于）
   - `<=`（小于等于）
   - `>`（大于）
   - `>=`（大于等于）

7. **逻辑运算符**：
   - `&&`（逻辑与）

8. **逻辑运算符**：
   - `||`（逻辑或）

9. **赋值运算符**：
   - `=`（简单赋值）
   - `+=`、`-=`、`*=`、`/=`、`%=`、`<<=`、`>>=`、`&=`、`|=`、`^=`（复合赋值运算符）

运算符的优先级决定了表达式中各部分的计算顺序。例如，乘法运算符`*`的优先级高于加法运算符`+`，因此在表达式 `a + b * c` 中，先计算 `b * c`，然后再加上 `a`。

除了优先级外，还有一些运算符是右结合的，例如赋值运算符`=`，意味着它从右向左结合。例如，`a = b = 5` 在Go语言中是合法的，先将 `5` 赋给 `b`，然后将 `b` 的值再赋给 `a`。

这些规则有助于编写清晰且按预期执行的表达式。

::: tip 可使用括号来提升表达式中指定运算符的优先级，从而实现需求。
:::