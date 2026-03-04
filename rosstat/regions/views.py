from django.shortcuts import render


def select_regions(request):

    return render(request, 'regions/select_region.html')

def compare_regions(request):
    # context = creat_context()
    return render(request, 'regions/compare_regions.html')
