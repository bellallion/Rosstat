from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import redirect
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm

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



def register(request):
     if request.method == 'POST': 
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Создан аккаунт {username}!')
            return redirect('main')
     else:
         form = UserRegisterForm()
     return render(request, 'accounts/register.html', {'form': form})

