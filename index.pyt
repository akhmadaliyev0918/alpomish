# a, b, c, d, e = map(int, input().split())

# max = a+b+c+d+e - max(a,b,c,d,e)
# min = a+b+c+d+e - min(a,b,c,d,e)

# print(max, min)

# price = int(input())

# a, b, c = map(int, input().split())

# if price > a + b +c:
#     print("No")
# else:
#     print("Yes")


# print(45)

# raqam = "546"


# for n in raqam:
#     if int(n) % 2 == 1:
#         print("Yes")
#         break
#     else:
#         print("No")

# t = int(input())
# n = int(input())
# b = t + n
# if b <= 24:
#   print(b)
# else:
#   print(b-24)

# t = int(input())
# n = int(input())
# b = t + n
# if b < 24:
#   print(b)
# elif b == 24:
#   print(0)
# else:
#   print(b - 24)

a, b = map(int, input().split())

c = (b - a) + 1

print(c * 10)