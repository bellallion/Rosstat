from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import redirect

def user_login(request):
    if request.POST:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user=user)
            return redirect('main')
    return render(request, 'accounts/login.html')


def user_logout(request):
    logout(request)
    return redirect('login')

