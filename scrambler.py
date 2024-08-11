#DUUBULDBFRBFRRULLLBRDFFFBLURDBFDFDRFRULBLUFDURRBLBDUDL
#DUFFURRDL  B UUBRRBDDU
import random
import twophase.solver  as sv
import pyscript
final2 = "Error: Some edges are undefined."
#solved positon of the cube
#            0                                   9                                  18                                   27                                  36                                  45                                     
possible = ["U","U","U","U","U","U","U","U","U","R","R","R","R","R","R","R","R","R","F","F","F","F","F","F","F","F","F","D","D","D","D","D","D","D","D","D","L","L","L","L","L","L","L","L","L","B","B","B","B","B","B","B","B","B"]
def move(x, y):
    temp = possible[y]
    possible[y] = possible[x]
    possible[x] = temp
def f():
    move(19,23)
    move(19,25)
    move(19,21)
    move(18,20)
    move(18,26)
    move(18,24)
    move(7,12)
    move(7,28)
    move(7,41)
    move(6,9)
    move(6,29)
    move(6,44)
    move(8,15)
    move(8,27)
    move(8,38)
def b():
    move(46,50)
    move(46,52)
    move(46,48)
    move(45,47)
    move(45,53)
    move(45,51)
    move(1,39)
    move(1,34)
    move(1,14)
    move(2,36)
    move(2,33)
    move(2,17)
    move(0,42)
    move(0,35)
    move(0,11)
#moves array in a way that simulates the cube turning left downwards
def l():
    move(37,41)
    move(37,43)
    move(37,39)
    move(36,38)
    move(36,44)
    move(36,42)
    move(0,18)
    move(0,27)
    move(0,53)
    move(6,24)
    move(6,33)
    move(6,47)
    move(3,21)
    move(3,30)
    move(3,50)
# moves the array in a a fashion that simulates the top of the cube moving in a counter clockwise motion
def uprime():
    move(0,6)
    move(0,8)
    move(0,2)
    move(1,3)
    move(1,7)
    move(1,5)
    move(9,18)
    move(18,36)
    move(36,45)
    move(11,20)
    move(20,38)
    move(38,47)
    move(10,19)
    move(10,37)
    move(10,46)
    move(19,46)
    move(37,10)
#moves the array in a fashion that the top of the cube moves in a clockwise rotation
def r():
    move(10,14)
    move(10,16)
    move(10,12)
    move(9,11)
    move(9,17)
    move(9,15)
    move(20,2)
    move(20,51)
    move(20,29)
    move(8,45)
    move(8,35)
    move(8,26)
    move(23,5)
    move(23,48)
    move(23,32)
for x in range (0,500):
    mover = random.randint(0,14)
    if mover == 0:
        r()
    if mover == 1:
        l()
    if mover == 2:
        uprime()
    if mover == 3:
        b()
    if mover == 4:
        f()
    if mover == 5:
        r()
        r()
    if mover == 6:
        l()
        l()
    if mover == 7:
        uprime()
        uprime()
    if mover == 8:
        f()
        f()
    if mover == 9:
        b()
        b()
    if mover == 10: 
        r()
        r()
        r()
    if mover == 11:
        uprime()
        uprime()
        uprime()
    if mover == 12:
        f()
        f()
        f()
    if mover == 13:
        b()
        b()
        b()
    if mover == 14:
        l()
        l()
        l()


    

while final2 == "Error: Some edges are undefined." or final2 == "Error: Some corners are undefined.":
    mixer = str(possible)
    final = mixer.replace("\'", "")
    final = final.replace(",", "")
    final = final.replace("[", "")
    final =  final.replace("]", "")
    final = final.replace(" ", "")
    final2 = sv.solve(final)
    print(final)
final2 = final2.replace("3", '\'')
final2 = final2.replace("1", '')
reverse = final2.split(" ")
reverse.pop()
scramble = ""
for x in reversed(reverse):
    if x == "R":
        scramble += "R' "
    elif x == "L":
        scramble += "L' "
    elif x == "U":
        scramble += "U' "
    elif x == "D":
        scramble += "D' "
    elif x == "B":
        scramble += "B' "
    elif x == "F":
        scramble += "F' "
    elif x == "R'":
        scramble += "R "
    elif x == "L'":
        scramble += "L "
    elif x == "U'":
        scramble += "U "
    elif x == "D'":
        scramble += "D "
    elif x == "B'":
        scramble += "B "
    elif x == "F'":
        scramble += "F "
    else:
        scramble += x
        scramble += " "
print(scramble)
